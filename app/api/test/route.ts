// app/api/test/route.ts

import { NextResponse } from "next/server";

export async function PUT() {
  return NextResponse.json({
    success: true,
    message: "PUT Working",
  });
}