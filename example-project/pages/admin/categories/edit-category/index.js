import { BASE_URL } from "../../../../backend/backendConfig";
import axios from "axios";
import { useRouter } from "next/router";
import deleteConfirm from "../../../../components/admin/ui/deleteConfirm";
import ListCategories from "../../../../components/admin/categories/ListCategories";

// import { useState } from "react";

ListCategories
const ListCategoriesPage = (props) => {
  const router = useRouter();
  const removeCategoryHandler = async (categoryId) => {
    deleteConfirm(categoryId, () => {
      router.push("/admin/categories/edit-category");
    });
  };

  return <ListCategories categories={props.categories} onRemoveCategory={removeCategoryHandler} />;
};

export async function getStaticProps () { 
  try {
    const response = await axios.get('http://localhost:3500/api/user/categories'); // Örnek bir endpoint URL'si
    const categories = response.data.categories;
    return {
      props: {
        categories,
        base_url: BASE_URL
      },
      revalidate: 2 // kaç saniyede bir yeni datayı dahil etsin.
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default ListCategoriesPage;