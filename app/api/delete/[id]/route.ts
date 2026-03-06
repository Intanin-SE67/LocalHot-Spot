import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await context.params;

  // Your delete logic here
  return NextResponse.json({ message: `Deleted item ${id}` });
}

