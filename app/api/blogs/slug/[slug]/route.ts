import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  }
) {
  const { slug } = await params;

  const snapshot = await adminDb
    .collection("blogs")
    .where("slug", "==", slug)
    .limit(1)
    .get();

  if (snapshot.empty) {
    return NextResponse.json(
      {
        success: false,
        message: "Blog not found",
      },
      { status: 404 }
    );
  }

  const doc = snapshot.docs[0];

  return NextResponse.json({
    success: true,
    blog: {
      id: doc.id,
      ...doc.data(),
    },
  });
}