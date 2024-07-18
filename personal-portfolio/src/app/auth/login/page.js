"use client"
// import LoginForm from "@/components/admin/LoginForm.js";
import { MaterialLoginForm } from "@/components/material/LoginForm";
import { API_BASE_URL } from "@/lib/urlConfig";
import { setIsAuth } from "@/store/isAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuthState = useSelector((state) => state.isAuth.isAuth);
  const router = useRouter();

  useEffect(() => {
    if (isAuthState) {
      router.push("/admin");
    }
  }, [isAuthState]);

  const handleLoginFormSubmit = async (values) => {
    try {
      const response = await fetch(`${API_BASE_URL}auth/login`, {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log(data.isAuth);
      if (data.isAuth) {
        dispatch(setIsAuth(true));
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (e.g., display error message)
    }
  };

  return <MaterialLoginForm onFinish={handleLoginFormSubmit}/>;
};

export default LoginPage;