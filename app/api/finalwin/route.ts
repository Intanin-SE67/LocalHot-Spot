import { prisma } from "@/lib/prisma";
import { success } from "better-auth";

export async function POST(req: Request) {
    const body = await req.json();
    const { winnerId, createId } = body

    await prisma.choice.update({
        where: { id: winnerId },
        data: {
            finalWin: { increment: 1},
            playCount: { increment: 1}
        }
    });
     await prisma.create.update({
        where: { id: createId },
        data: {
            playCount: { increment: 1}
        }
    });
    return Response.json({ success: true });
}