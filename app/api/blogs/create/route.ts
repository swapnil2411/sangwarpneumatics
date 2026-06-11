import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const docRef = await adminDb.collection("blogs").add({
      title: body.title,
      slug: body.slug,
      shortDescription: body.shortDescription,
      content: body.content,
      featuredImage: body.featuredImage,
      category: body.category,
      status: body.status || "Draft",
      author: "Sangawar Pneumatics",
      comments: body.comments ?? true,
      featured: body.featured ?? false,
      seoIndexing: body.seoIndexing ?? true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      id: docRef.id,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog",
      },
      { status: 500 }
    );
  }
}