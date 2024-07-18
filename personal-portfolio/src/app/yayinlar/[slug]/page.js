import React from "react";
import BlogDetails from "./blogDetail";
import { API_BASE_URL } from "@/lib/urlConfig";

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const response = await fetch(`${API_BASE_URL}user/blogs`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const posts = await response.json();

    const postUrls = posts.map((post) => ({
      slug: post.url,
    }));
    return postUrls;
  } catch (error) {
    throw new Error("Error fetching posts:", error);
  }
}

export async function generateMetadata({ params }) {
  const blogData = await fetchPostData(params);
  return {
    title: blogData.blog.title,
  };
}

async function fetchPostData(params) {
  const response = await fetch(
    `${API_BASE_URL}user/blogs/${params.slug}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch post data");
  }
  return response.json();
}

async function BlogDetailPage({ params }) {
  const post = await fetchPostData(params);
  // const { id, title, descr, img } = post.blog;
  return (
    <>
      <BlogDetails blog={post.blog} />
    </>
  );
}

export default BlogDetailPage;
