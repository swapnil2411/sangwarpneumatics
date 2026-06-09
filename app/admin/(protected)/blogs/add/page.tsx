"use client";

import { useRouter } from "next/navigation";

import BlogForm from
  "@/components/admin/BlogForm";

export default function AddBlogPage() {

  const router = useRouter();

  const createBlog = async (
    data: any
  ) => {

    const response =
      await fetch(
        "/api/blogs",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            data
          ),
        }
      );

    if (response.ok) {
      router.push(
        "/admin/blogs"
      );
    }
  };

  return (
    <>
      <h1>Add Blog</h1>

      <BlogForm
        onSubmit={
          createBlog
        }
      />
    </>
  );
}