import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/server";
import { redirect } from "next/navigation";
import MainClient from "./MainClient"


export default async function Home({searchParams,}: {searchParams: { search?: string };}) {
  const search = searchParams?.search ?? "";

  const session = await getSession();
  if (!session) {
    redirect("/auth/login");
  }
  const email = session.user.email;
  const creates = await prisma.create.findMany({
    where: {
      title: { contains: search,mode: "insensitive"}
    },
    //include คือ ให้ Create ดึงข้อมูลuser ที่เป็นเจ้าของมาด้วย
    include: {
      user: true
    }
  });
  return <MainClient creates={creates}  />
}