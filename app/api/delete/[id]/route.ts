import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }

) {
  const { id } = await context.params;
  await prisma.create.delete({
    where: { id: Number(id) },
  });

  // Your delete logic here
  return NextResponse.json({ message: `Deleted item ${id}` });
}

