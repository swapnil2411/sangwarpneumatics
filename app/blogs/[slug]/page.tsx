import Image from "next/image";
import Link from "next/link";
import "../../styles/blogs.css"
import { useService } from "@/services/useService";
import PageBanner from "@/components/common/PageBanner";

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const service = useService();

  const data =
    await service.getBlogBySlug(
      slug
    );

  const blog = data.blog;

  return (
    <>
      <PageBanner
      title={blog.title}
      subtitle={blog.category}
    />
    <section className="blog-details sec_pad">
      <div className="container">

        {/* Breadcrumb */}

        <div className="breadcrumb">
          <Link href="/">
            Home
          </Link>

          <span>/</span>

          <Link href="/blogs">
            Blogs
          </Link>

          <span>/</span>

          <span>
            {blog.title}
          </span>
        </div>

        {/* Header */}

        <div className="blog-header">

          <span className="blog-category">
            {blog.category}
          </span>

          <h1>
            {blog.title}
          </h1>

          <div className="blog-meta">

            <span>
              Sangawar Pneumatics
            </span>

            <span>•</span>

            <span>
              {
  blog.createdAt
    ? new Date(
        blog.createdAt._seconds *
          1000
      ).toLocaleDateString(
        "en-IN",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      )
    : ""
}
            </span>

          </div>

        </div>

        {/* Featured Image */}

        {blog.featuredImage && (
          <div className="blog-banner">

            <Image
              src={
                blog.featuredImage
              }
              alt={blog.title}
              width={1200}
              height={700}
              priority
            />

          </div>
        )}

        {/* Content */}

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{
            __html:
              blog.content,
          }}
        />

      </div>
    </section>
    </>
  );
}