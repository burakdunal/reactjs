"use client"
import KisiBilgileriCard from "@/components/admin/KisiBilgileri";
import axios from "axios";

export default function KisiBilgileriIndex({userData, backendEndpoint, apiEndpoint}) {
  const editPersonHandler = async (editedPersonData)=>{
    try {
      // const response = await fetch(`${apiEndpoint}admin/user/edit`, {
      //   method: 'POST',
      //   credentials: "include",
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      //   body: JSON.stringify(editedPersonData),
      // });

      // if (!response.ok) {
      //   throw new Error('Edit failed');
      // }

      // const data = await response.json();
      // if (response.status === 200 && data.status === "success") {
      //   console.log(data.text);
      // }
      const axiosConfig = {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await axios.post(
        apiEndpoint + "admin/user/edit",
        editedPersonData,
        axiosConfig
      );

      // let notificationParams;
      if (response.status === 200 && response.data.status === "success") {
        // notificationParams = [
        //   "success",
        //   "Başarılı",
        //   "Ürün bilgileri güncellendi.",
        //   1.5,
        //   () => {
        //     setTimeout(() => {
        //       router.push("/admin/products/edit-product");
        //     }, 300);
        //   },
        // ];
        console.log(response.data.text);
      } else if ( response.status === 200 && response.data.status === "warning") {
        // notificationParams = [
        //   "warning",
        //   "Dikkat",
        //   response.data.text,
        //   0,
        //   () => {
        //     router.reload();
        //   }
        // ];
        console.log(response.data.text);
      } else if (response.status === 400 && response.data.status === "error") {
        // notificationParams = [
        //   "error",
        //   "Hata",
        //   response.data.text,
        //   0,
        //   () => {}
        // ];
        console.log(response.data.text);
      }
    } catch (error) {
      console.error('Edit error:', error);
    }
  };

  return <KisiBilgileriCard userData={userData} backendEndpoint={backendEndpoint} onEditPerson={editPersonHandler} />;
}