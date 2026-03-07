import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/server";
import { error } from "console";


export async function POST(req: Request) {
  const session = await getSession()
  if (!session) {
    return Response.json({ error:"Unauthorized"}, { status: 401 })
  }
  const body = await req.json();
  
  const data = await prisma.create.create({
    data: {
      title: body.title,
      description: body.description,
      coverImage: body.coverImage,
      language: body.language,
      visibility: body.visibility,
      category: body.category,

      userId: session.user.id,  // session.user.idก็คือ คนที่loginอยู่ตอนนี้

      choices: {
        create: body.choices.map((c: any) => ({
          name: c.name,
          externalUrl: c.externalUrl,
          image: c.image
        }))
      }
    },
    include: {
      choices: true
    }
  });

  return NextResponse.json(data);
}

export async function GET() {
  const data = await prisma.create.findMany({
    include: {
      choices: true
    }
  });
  return NextResponse.json(data);
}