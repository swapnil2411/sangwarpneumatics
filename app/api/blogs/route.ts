import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";


export async function GET() {
  try {
    const snapshot = await adminDb
      .collection("blogs")
      .orderBy("createdAt", "desc")
      .get();

    const blogs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({
      success: true,
      blogs,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}