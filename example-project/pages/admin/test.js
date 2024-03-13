import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth';
import axios from "axios";

const TestPage = () => {
  const [content, setContent] = useState({});
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  // console.log("Oturum: "+isAuth); iki kere basıyor.

  useEffect(() => {
    const fetchData = async () => {
      try {
        // let categoryId = 1;
        const axiosConfig = {
          withCredentials: true,
          // headers: {
          //   "Content-Type": "application/x-www-form-urlencoded",
          // },
        };

        const response = await axios.get(
          "http://localhost:3500/api/admin/getCategoryTest",
          axiosConfig
        );

        if (response.status === 200 && response.data.status === "success") {
          const category = response.data.category;
          const categoryData = {
            name: category.name,
            descr: category.descr,
            products: category.products,
          }
          setContent(categoryData);
        }
      } catch (error) {
        if (error.response.status === 401) {
          // alert(
          //   "Status: " +
          //     error.response.data.status +
          //     " Message: " +
          //     error.response.data.text
          // );
        } else if (error.response.status === 403) {
          console.log("Error fetching data:", error);
        }
        setContent(error.response.data.text);
        dispatch(authActions.logout());
      }
    };

    if (isAuth) {
      fetchData();
    } else {
      // router.push("/");
      return window.location.href = "/";
    }
  }, [isAuth]);

  return (
    <>
      <p>Kategori Adı: {content.name}</p>
      <p>Açıklama: {content.descr}</p>
      {content.products && content.products.map((product) => (
        <div key={product.id}>
          <p>Ürün Id: {product.id}</p>
          <p>Ürün Adı: {product.name}</p>
          {/* Diğer ürün detaylarını buraya ekleyin */}
        </div>
      ))}
    </>
  );
};

export default TestPage;
