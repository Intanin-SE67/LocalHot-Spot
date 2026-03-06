import { NextRequest,NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
    request: NextRequest,{ params }: { params: { id: string } }
):Promise<NextResponse>{
    const { id } = params;
  return NextResponse.json({ message: `Deleted item ${id} Successfully` });
}