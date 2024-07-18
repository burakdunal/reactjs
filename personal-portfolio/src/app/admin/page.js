"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setIsAuth } from "@/store/isAuth";
import useCheckAuth from "@/hooks/useCheckAuth";
import { Cookies } from "react-cookie";
import { API_BASE_URL } from "@/lib/urlConfig";

export default function AdminPage() {
  const { isAuthCheckedForInit, isAuth } = useCheckAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  useEffect(() => {
    if (isAuthCheckedForInit && !isAuth) {
      router.push("/auth/login");
    }
  }, [isAuthCheckedForInit, isAuth, router]);

  if (!isAuthCheckedForInit) {
    // Eğer auth kontrolü henüz tamamlanmamışsa burada bir yükleme gösterebiliriz
    return;
  }

  // const handleLogoutAction = async () => {
  //   try {
  //     const response = await fetch(`${API_BASE_URL}auth/logout`, {
  //       credentials: "include",
  //     });

  //     if (!response.ok) {
  //       throw new Error('Check Auth failed');
  //     }

  //     const data = await response.json();

  //     if (response.status === 200 && data.status === "success") {
  //       cookies.remove("checkToken", {path: "/", domain: "localhost"});
  //       cookies.remove("user", {path: "/", domain: "localhost"});
  //       dispatch(setIsAuth(false));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <p>Dashboard</p>
  );
}
