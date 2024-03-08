import axios from "axios";
import ProductList from "../components/products/ProductList";
import { BASE_URL } from "../backend/backendConfig";
import uuidGenerator from "../components/utils/uuidGenerator";
import txnIdGenerator from "../components/utils/txnIdGenerator";
// import { Cookies } from 'react-cookie';

function HomePage(props) {
  // const cookies = new Cookies();
  // console.log(cookies.get('user'));
  return <ProductList base_url={props.base_url} products={props.products} />;
}

// nextJS'in sunduğu özel bir fonksiyon. Static datayı sayfa renderlanmadan önce çekip ondan sonra tarayıcıya sayfayı gönderiyor.
// Komponentlerde çalışmaz, yalnızca pages dizini altındaki dosyalarda çalışır.
export async function getStaticProps () { 
  try {
    const txn_id = txnIdGenerator("txn");
    const response = await axios.get('http://localhost:7003/ExampleCMS/RetrieveCustomerProductSyncECMSReq/getProducts?transactionID=' + txn_id); // Örnek bir endpoint URL'si
    const products = response.data.products;
    return {
      props: {
        products,
        base_url: BASE_URL
      },
      revalidate: 2 // kaç saniyede bir yeni datayı dahil etsin.
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// build aşamasında değil her yeni istek geldiğinde tekrar renderlanır. (Yine sunucu tarafında) Saniyede birden fazla kere yeni data gelmiyor ise çok gerekli değil.
// context verilerine erişip kullanabilirsin. Örn. const req = context.req;
// export async function getServerSideProps() {
//   return {
//     props: {
//       products: DUMMY_DATA
//     }
//   }
// }

export default HomePage;
