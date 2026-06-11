// "use client";

// import { useRouter } from "next/navigation";

// import BlogForm from
//   "@/components/admin/BlogForm";

// export default function AddBlogPage() {

//   const router = useRouter();

//   const createBlog = async (
//     data: any
//   ) => {

//     const response =
//       await fetch(
//         "/api/blogs",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type":
//               "application/json",
//           },
//           body: JSON.stringify(
//             data
//           ),
//         }
//       );

//     if (response.ok) {
//       router.push(
//         "/admin/blogs"
//       );
//     }
//   };

//   return (
//     <>
//       <h1>Add Blog</h1>

//       <BlogForm
//         onSubmit={
//           createBlog
//         }
//       />
//     </>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import BlogForm from "@/components/admin/BlogForm";

export default function AddBlogPage() {
  const router = useRouter();

  const createBlog = async (data: any) => {
    const response = await fetch("/api/blogs/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) router.push("/admin/blogs");
  };

  return (
    <div className="add-blog-page">
      <div className="page-header-row">
        <button className="back-btn" onClick={() => router.back()}>
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1>Add blog post</h1>
          <p className="page-subtitle">Fill in the details below to publish a new article</p>
        </div>
      </div>

      <BlogForm onSubmit={createBlog} />
    </div>
  );
}