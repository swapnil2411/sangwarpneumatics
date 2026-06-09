import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

export async function GET() {
  try {
    const snapshot = await adminDb
      .collection("blogs")
      .get();

    const blogs = snapshot.docs.map(
      (doc) => doc.data()
    );

    const totalBlogs =
      blogs.length;

    const publishedBlogs =
      blogs.filter(
        (blog) =>
          blog.status ===
          "Published"
      ).length;

    const draftBlogs =
      blogs.filter(
        (blog) =>
          blog.status ===
          "Draft"
      ).length;

    return NextResponse.json({
      success: true,
      totalBlogs,
      publishedBlogs,
      draftBlogs,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}