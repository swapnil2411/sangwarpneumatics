const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const useService = () => {
  const getBlogs = async () => {
  const url = `${API_BASE}/blogs`;

  console.log("Fetching:", url);

  const response = await fetch(url, {
    cache: "no-store",
  });

  console.log("Status:", response.status);

  if (!response.ok) {
    const text = await response.text();

    console.error("Response:", text);

    throw new Error(
      `Failed to fetch blogs (${response.status})`
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