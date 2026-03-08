import { prisma } from "@/lib/prisma";
import { success } from "better-auth";

export async function POST(req: Request) {
    const { winnerId, loserId } = await req.json();

    await prisma.choice.update({
        where: { id: winnerId },
        data: {
            winCount: { increment: 1},
            playCount: { increment: 1}
        }
    });

    await prisma.choice.update({
        where: { id: loserId },
        data: {
            playCount: { increment: 1}
        }
    });
    return Response.json({ success: true });
}