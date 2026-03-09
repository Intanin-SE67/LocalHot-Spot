import { prisma } from "@/lib/prisma";
import PlayClient from "./PlayClient";

export default async function PlayPage({ params, }: { params: Promise<{ id: string }>; }) {
  const { id } = await params;
  const numericId = Number(id);
  
  const quiz = await prisma.create.findUnique({where:{id: numericId }});
  
  return <PlayClient quiz={quiz}/>;
}