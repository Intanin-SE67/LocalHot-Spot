import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, 
    { params }: { params: Promise<{ id: string }> } //รับ request GET เช่น /api/play/3  , params คือ เช่น id = 3
) {                                                 // Promise คือ obj ที่ ใช้จัดการงานแบบasync(การทำงานที่ไม่รอผลทันที เช่นการดึงข้อมูลapi ฟรือ การอ่านไฟล์จากdb ซึงมีเวลาในการประมวลผล)
    const { id } = await params;

    const choices = await prisma.choice.findMany({
        where: {
            createId: Number(id)
        }
    });
    return NextResponse.json(choices);              //ส่งJSON กลับให้ frontend
}
