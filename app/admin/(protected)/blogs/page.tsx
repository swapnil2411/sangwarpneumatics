"use client";

import Link from "next/link";
import Image from "next/image";
import { Pencil, Trash2, LayoutList, Plus } from "lucide-react";
import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs");
      const data = await response.json();
      setBlogs(data.blogs || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      if (response.ok) {
        setBlogs((prev) => prev.filter((blog) => blog.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="page-header">
        <h1>Blogs</h1>
        <Link href="/admin/blogs/add" className="admin_btn">
          Add Blog
        </Link>
      </div>

      {blogs.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state__icon-wrapper">
            <LayoutList size={28} strokeWidth={1.5} />
          </div>
          <h2 className="empty-state__title">No blog posts found</h2>
          <p className="empty-state__description">
            You can add a new blog post by clicking the button below
          </p>
          <Link href="/admin/blogs/add" className="empty-state__cta">
            <Plus size={16} />
            Add Blog
          </Link>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="blog-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Description</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>
                    {blog.featuredImage && (
                      <Image
                        src={blog.featuredImage}
                        alt={blog.title}
                        width={80}
                        height={60}
                        className="blog-thumb"
                      />
                    )}
                  </td>
                  <td>{blog.title}</td>
                  <td>{blog.category}</td>
                  <td>{blog.shortDescription?.slice(0, 80)}...</td>
                  <td>
                    <span
                      className={`status-badge ${
                        blog.status === "Published" ? "published" : "draft"
                      }`}
                    >
                      {blog.status}
                    </span>
                  </td>
                  <td>
                    {blog.createdAt
                      ? new Date(
                          blog.createdAt._seconds * 1000
                        ).toLocaleDateString()
                      : "-"}
                  </td>
                  <td>
                    <div className="action-buttons">
                      <Link
                        href={`/admin/blogs/edit/${blog.id}`}
                        className="edit-btn"
                      >
                        <Pencil size={18} />
                      </Link>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(blog.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}