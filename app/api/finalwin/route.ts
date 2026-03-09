import { prisma } from "@/lib/prisma";
import { success } from "better-auth";

export async function POST(req: Request) {
    const body = await req.json();
    const { winnerId, createId } = body

    await prisma.choice.update({
        where: { id: winnerId },
        data: {
            finalWin: { increment: 1},              //คือ  เพิ่มว่าchoiceอันนี้ finalwin เท่าไหร่   ถูกเล่นไปเท่าไหร่
            playCount: { increment: 1}
        }
    });
     await prisma.create.update({                   // คือ เพิ่ม playCount คำถาม (คือเพิ่มจำนวนว่าเล่นไปเท่าไหร่แล้ว)
        where: { id: createId },
        data: {
            playCount: { increment: 1}
        }
    });
    return Response.json({ success: true });
}