import { prisma } from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: Promise<{ id:string}>}) {
    const { id } = await params;

    const question = await prisma.create.findUnique({
        where: { id: Number(id) },
        include: { choices: true }
    });
    return Response.json(question);
}