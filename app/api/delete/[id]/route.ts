import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
    request: Request,{ params }: { params: { id: string } } // ตย. เช่น /api/delete/5 , params = { id: "5" } ***param.id ***
){
    const { id } = await params; // ตอนนี้ id = "5" *** คือตรงนี้จะบอกว่า const id = params.id ***
    await prisma.create.delete({
        where: { id: Number(id) } // id: คือในcreate table  ส่วน Number(id) คือ แปลงจาก "5"เป็น 5   เพื่อจะได้เทียบกันแล้วหาเจอแล้วลบออก
    });
    return NextResponse.json({ message: "Deleted successfully" });
}