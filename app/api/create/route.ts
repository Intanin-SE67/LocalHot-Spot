import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(req: Request) {
  const body = await req.json();

  const data = await prisma.create.create({
    data: {
      title: body.title,
      description: body.description,
      coverImage: body.coverImage,
      language: body.language,
      visibility: body.visibility,
      category: body.category,

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