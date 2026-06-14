"use client";

import { useState } from "react";

interface BlogImageProps {
  src: string;
  alt: string;
}

export default function BlogImage({
  src,
  alt,
}: BlogImageProps) {
  const [loaded, setLoaded] =
    useState(false);

  return (
    <div className="blog_image_container">
      {!loaded && (
        <div className="blog_image_skeleton" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() =>
          setLoaded(true)
        }
        className={`blog_image ${
          loaded
            ? "loaded"
            : ""
        }`}
      />
    </div>
  );
}