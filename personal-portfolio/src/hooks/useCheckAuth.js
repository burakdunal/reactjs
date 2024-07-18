import { setIsAuth } from "@/store/isAuth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCheckAuth = () => {
  const dispatch = useDispatch();
  const [isAuthCheckedForInit, setIsAuthCheckedForInit] = useState(false);

  useEffect(() => {
    const checkAuthFetchInit = async () => {
      try {
        const response = await fetch('http://localhost:3500/api/auth/check-auth', {
          credentials: "include",
        });
  
        if (!response.ok) {
          throw new Error('Check Auth failed');
        }
  
        const data = await response.json();

        if (response.status === 200 && data.status === "success") {
          console.log("oturum devam ediyor");
          dispatch(setIsAuth(true));
        } else {
          dispatch(setIsAuth(false));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsAuthCheckedForInit(true); // Auth kontrolünün tamamlandığını işaretliyoruz
      }
    };
    checkAuthFetchInit();
  }, []);
  const isAuth = useSelector((state) => state.isAuth.isAuth);
  return {isAuthCheckedForInit, isAuth};
}

export default useCheckAuth;