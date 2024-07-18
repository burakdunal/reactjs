"use server"
import { API_BASE_URL, BACK_BASE_URL } from "@/lib/urlConfig";
import KisiBilgileriIndex from ".";

const getUserData = async () => {
  try {
    const fetchUser = await fetch(`${API_BASE_URL}admin/userDetail`, {
      next: { revalidate: 10 },
    });
    if (!fetchUser.ok) {
      throw new Error("Network response was not ok");
    }

    const userData = await fetchUser.json();
    return userData;
  } catch (err) {
    throw new Error("Error fetching user:", err);
  }
};

export default async function KisiBilgileri() {
  const userData = await getUserData();
  
  return <KisiBilgileriIndex userData={userData.user} backendEndpoint={BACK_BASE_URL} apiEndpoint={API_BASE_URL} />;
}