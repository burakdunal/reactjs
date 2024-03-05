// import { useSelector } from "react-redux";
import { useRouter } from "next/router";
// import { useEffect } from "react";
import axios from "axios";
// import dynamic from "next/dynamic";

// const NewProductForm = dynamic(
//   async () =>
//     await import("../../../../components/admin/products/NewProductForm"),
//   {
//     ssr: false,
//   }
// );

const NewCategoryPage = (props) => {
  const router = useRouter();
  // const isAuth = useSelector((state) => state.auth.isAuth);

  // useEffect(() => {
  //   if (!isAuth) {
  //     return (window.location.href = "/");
  //   }
  // }, [isAuth]);

  // if (isAuth) {
    
  // }

  const addCategoryHandler = async (enteredCategoryData) => {
    try {
      const axiosConfig = {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await axios.post(
        "http://localhost:3500/api/admin/postProduct",
        enteredProductData,
        axiosConfig
      );

      if (response.status === 200 && response.data.status === "success") {
        // return response.data.text;
        router.push("/admin/products/edit-product");
      }
    } catch (error) {
      // if (error.response.status === 401) {
      //   // alert(
      //   //   "Status: " +
      //   //     error.response.data.status +
      //   //     " Message: " +
      //   //     error.response.data.text
      //   // );
      // } else if (error.response.status === 403) {
      //   console.log("Error fetching data:", error);
      // }
      return error;
    }
    // const result = await postProductData();
    // console.log("Form submit sonucu: " + result);
  };

  // return <NewProductForm onAddProduct={addProductHandler} />;

};

export default NewCategoryPage;
