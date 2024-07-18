import { API_BASE_URL } from "@/lib/urlConfig";
import { AllBlogsSection } from "./blogs";

export const dynamicParams = false;

const getBlogsCategory = async () => {
  try {
    const fetchBlogsCategory = await fetch(`${API_BASE_URL}user/blogs/all`, {
      next: { revalidate: 300 },
    });
    if (!fetchBlogsCategory.ok) {
      throw new Error("Network response was not ok");
    }

    const response = await fetchBlogsCategory.json();
    return response;
  } catch (err) {
    throw new Error("Error fetching user:", err);
  }
};

export default async function AllBlogsPage(){
  const blogsCategory = await getBlogsCategory();
return <AllBlogsSection posts={blogsCategory.result} />
}