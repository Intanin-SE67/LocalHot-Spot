
import "./globals.css";
import Category from "./components/Category";
import Navbar from "./components/navbarfront";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/server";
import PageClient from "./PageClient"

export default async function Home({searchParams,}: {searchParams: Promise<{ search?: string }>;}) {
  const params = await searchParams;
  const search = params?.search ?? "";
  const creates = await prisma.create.findMany({
    //include คือ ให้ Create ดึงข้อมูลuser ที่เป็นเจ้าของมาด้วย
    include: {
      user: true
    }
  });
  return <PageClient creates={creates} />
}
