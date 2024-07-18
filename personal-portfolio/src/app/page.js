import { API_BASE_URL, BACK_BASE_URL } from "@/lib/urlConfig";
import HomePage from ".";

const getUserData = async () => {
  try {
    const fetchUser = await fetch(`${API_BASE_URL}admin/user`, {
      next: { revalidate: 300 },
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

export default async function Home() {
  const userData = await getUserData();

  return <HomePage userData={userData} backendEndpoint={BACK_BASE_URL} apiEndpoint={API_BASE_URL} />;
}
