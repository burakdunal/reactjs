import axios from "axios";
import ProductDetail from "../../components/products/ProductDetail";
import { BASE_URL } from "../../backend/backendConfig";
import uuidGenerator from "../../components/utils/uuidGenerator";
import txnIdGenerator from "../../components/utils/txnIdGenerator";

const ProductDetails = (props) => {
  return (
    <ProductDetail
      image={props.base_url + props.productData.image}
      name={props.productData.name}
      price={props.productData.price}
      descr={props.productData.descr}
    />
  );
};

export async function getStaticPaths() {
  // fallback false paths dizini desteklenen tüm prodId değerlerine sahip olduğunu belirtir. Bu sayede dizide olmayan bir id ile gelinir ise 404 görünür.
  try {
    const txn_id = txnIdGenerator("txn");
    const response = await axios.get('http://localhost:7003/ExampleCMS/RetrieveCustomerProductSyncECMSReq/getProducts?transactionID=' + txn_id); // Örnek bir endpoint URL'si
    const products = response.data.products;

    return {
      fallback: false,
      paths: products.map((product) => ({
        params: { prodId: product.id.toString() },
      })),
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getStaticProps(context) {
  const prodId = context.params.prodId;
  const txn_id = txnIdGenerator(prodId);
  try {
    const response = await axios.get(
      'http://localhost:7003/ExampleCMS/RetrieveCustomerProductSyncECMSReq/getProductDetail?transactionID=' + txn_id + '&prodId=' + prodId
    );
    const product = response.data.product;
    return {
      props: {
        productData: {
          id: product.id.toString(),
          image: product.image,
          name: product.name,
          price: product.price,
          descr: product.descr,
        },
        base_url: BASE_URL
      },
      revalidate: 10, // belirtilen süre içerisinde yeni bir istek gelirse tetiklenir
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default ProductDetails;
