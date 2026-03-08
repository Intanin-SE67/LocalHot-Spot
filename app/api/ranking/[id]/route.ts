import { prisma } from "@/lib/prisma";

export async function GET(req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params
    const createId = Number(id);
    
    const data = await prisma.choice.findMany({
        where: {
            createId: createId
        },
        orderBy: {
            finalWin: "desc"
        }
    });
    return Response.json(data);    
}