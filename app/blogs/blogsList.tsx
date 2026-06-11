import Link from "next/link";
import { useService } from "@/services/useService";
import SectionHeading from "@/components/common/SectionHeading";

export default async function BlogsList() {
  const service = useService();

  const data = await service.getBlogs();

  return (
    <div className="blogs_wrapper">
      <div className="container">

        <SectionHeading
          title="Latest Insights"
          subtitle="Blogs"
        />

        <div className="blogs_content_wrapper sec_pad">

          {data.blogs
  .filter(
    (blog: any) =>
      blog.status ===
      "Published"
  )
  .map((blog: any) => (
            <div
              className="blog_col rounded-2xl hover:shadow-xl transition"
              key={blog.id}
            >
              <Link
                href={`/blogs/${blog.slug || blog.id}`}
                className="blog_card"
              >
                {/* Featured Image */}
                <figure className="image_wrapper">
                  <img
                    src={blog.featuredImage}
                    alt={blog.title}
                  />
                </figure>

                {/* Category */}
                <span className="blog_category">
                  {blog.category}
                </span>

                {/* Title */}
                <h3 className="blog_heading">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="blog_description">
                  {blog.shortDescription}
                </p>

                {/* Read More */}
                <span className="read_more">
                  Read More →
                </span>

              </Link>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}