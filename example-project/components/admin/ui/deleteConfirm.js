// components/admin/ui/deleteConfirm.js

import axios from "axios";
import { openConfirmModal } from "./confirmModal";
import { openNotification } from "./Notification";

const deleteConfirm = async (prodId, onProductDelete) => {
  openConfirmModal(
    "Onay",
    "Bu işlemi gerçekleştirmek istediğinize emin misiniz?",
    async () => {
      try {
        const axiosConfig = {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axios.post(
          `http://localhost:3500/api/admin/products/delete/${prodId}`,
          prodId,
          axiosConfig
        );

        if (response.status === 200 && response.data.status === "success") {
          openNotification(
            "success",
            "Başarılı",
            "Ürün kaldırıldı.",
            1.5,
            () => {
              onProductDelete(); // Ürün silindikten sonra tetiklenecek fonksiyonu çağır
            }
          );
        }
      } catch (error) {
        openNotification(
          "error",
          "Başarısız",
          `Kod: ${error.response.status} Açıklama: ${error.response.data.text}`,
          0,
          () => {
            return false;
          }
        );
      }
    },
    () => {
      console.log("İptal edildi");
    }
  );
};

export default deleteConfirm;