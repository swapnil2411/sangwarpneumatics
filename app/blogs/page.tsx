import PageBanner from "@/components/common/PageBanner";
import BlogsList from "./blogsList";
import type { Metadata } from "next";
import "../styles/blogs.css";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogsPage() {
  return (
    <>
      <PageBanner title="Blogs" />
      <BlogsList />
    </>
  );
}