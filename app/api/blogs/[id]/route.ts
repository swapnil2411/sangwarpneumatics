import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const doc = await adminDb
      .collection("blogs")
      .doc(id)
      .get();

    if (!doc.exists) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      blog: {
        id: doc.id,
        ...doc.data(),
      },
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

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const body = await request.json();

    await adminDb
      .collection("blogs")
      .doc(id)
      .update({
        ...body,
        updatedAt: new Date(),
      });

    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    console.error("PUT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await adminDb
    .collection("blogs")
    .doc(id)
    .delete();

  return NextResponse.json({
    success: true,
  });
}