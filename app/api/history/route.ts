import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth"
import { auth } from "@/lib/auth"

export async function POST(req: Request) {
    const session = await auth.api.getSession({
        headers: req.headers
    });
    if(!session) {
        return Response.json({error:"not login"})
    }
    const body = await req.json().catch(()=>null)
    if (!body) {
        return Response.json({ error: "no body"});
    }
    const { createId, winnerId } = body
    const history = await prisma.history.upsert({
        where:{
            userId_createId:{
                userId: session.user.id,
                createId
            }
        },
        update:{
            winnerId
        },
        create: {
            userId: session.user.id,
            createId,
            winnerId
        }
    });
    return Response.json(history);
}