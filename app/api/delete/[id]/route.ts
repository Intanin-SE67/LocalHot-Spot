import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
    request: Request,{ params }: { params: { id: string } }
){
    const { id } = await params;
    await prisma.create.delete({
        where: { id: Number(id) }
    });
    return NextResponse.json({ message: "Deleted successfully" });
}