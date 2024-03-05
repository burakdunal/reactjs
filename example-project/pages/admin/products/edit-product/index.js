import ListProduct from "../../../../components/admin/products/ListProduct";
import { BASE_URL } from "../../../../backend/backendConfig";
import axios from "axios";
import { useRouter } from "next/router";
import deleteConfirm from "../../../../components/admin/ui/deleteConfirm";

// import { useState } from "react";

const ListProductPage = (props) => {
  const router = useRouter();
  const removeProductHandler = async (prodId) => {
    deleteConfirm(prodId, () => {
      router.push("/admin/products/edit-product");
    });
  };

  return <ListProduct products={props.products} onRemoveProduct={removeProductHandler} />;
};

export async function getStaticProps () { 
  try {
    const response = await axios.get('http://localhost:3500/api/user/products'); // Örnek bir endpoint URL'si
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

export default ListProductPage;