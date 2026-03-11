import { prisma } from "@/lib/prisma"
import { create } from "domain";

export async function PUT(req: Request, { params }: { params: Promise<{ id:string}>}) {
    const { id } = await params;
    const body = await req.json();

    const updated = await prisma.create.update({
        where: { id: Number(id) },
        data: {
            title: body.title,
            description: body.description,
            coverImage: body.coverImage,
            language: body.language,
            category: body.category,
            visibility: body.visibility,

            playCount: 0
        }
    });
    await prisma.choice.deleteMany({
        where: {createId: Number(id)}
    });
    
    await prisma.choice.createMany({
        data: body.choices.map((c:any) =>({
            name: c.name,
            image: c.image,
            externalUrl: c.externalUrl ?? "",
            createId: Number(id)
        }))
    });

    return Response.json(updated);
}