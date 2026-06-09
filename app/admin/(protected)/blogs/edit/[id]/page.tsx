"use client";

import { useEffect, useState } from "react";

import {
  useRouter,
  useParams,
} from "next/navigation";

import BlogForm from "@/components/admin/BlogForm";

export default function EditBlogPage() {
  const params = useParams();

  const id = params?.id as string;

  const router = useRouter();

  const [blog, setBlog] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const response =
          await fetch(
            `/api/blogs/${id}`
          );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch blog"
          );
        }

        const data =
          await response.json();
        console.log("Fetching blog...", data.blog);
        setBlog(data.blog);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const updateBlog =
    async (data: any) => {
      try {
        const response =
          await fetch(
            `/api/blogs/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body:
                JSON.stringify(
                  data
                ),
            }
          );

        if (!response.ok) {
          throw new Error(
            "Failed to update blog"
          );
        }

        router.push(
          "/admin/blogs"
        );
      } catch (error) {
        console.error(error);
      }
    };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!blog) {
    return (
      <p>
        Blog not found
      </p>
    );
  }

  return (
    <>
      <h1>Edit Blog</h1>

      <BlogForm
        initialData={blog}
        onSubmit={
          updateBlog
        }
      />
    </>
  );
}