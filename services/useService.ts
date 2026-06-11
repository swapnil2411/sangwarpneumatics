const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const useService = () => {
  const getBlogs = async () => {
    const response = await fetch(
      `${API_BASE}/blogs`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch blogs"
      );
    }

    return response.json();
  };

  const getBlogById = async (
    id: string
  ) => {
    const response = await fetch(
      `${API_BASE}/blogs/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch blog"
      );
    }

    return response.json();
  };

  const getBlogBySlug = async (
  slug: string
) => {
  const response = await fetch(
    `${API_BASE}/blogs/slug/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch blog"
    );
  }

  return response.json();
};

  return {
    getBlogs,
    getBlogById,
    getBlogBySlug,
  };
};