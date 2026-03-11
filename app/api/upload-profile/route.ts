import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { prisma } from "@/lib/prisma"; // ตรวจสอบ path ของ prisma ให้ถูกต้อง
import { getSession } from "@/lib/server";

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    // ถ้าไม่มี session ให้ error ออกไปก่อน
    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

    // 1. บันทึกไฟล์ลงในเครื่อง (โฟลเดอร์ public/uploads)
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const uploadPath = path.join(process.cwd(), "public/uploads", fileName);

    await fs.mkdir(path.join(process.cwd(), "public/uploads"), { recursive: true });
    await fs.writeFile(uploadPath, buffer);

    const imageUrl = `/uploads/${fileName}`;

    // --- ส่วนสำคัญ: บันทึกชื่อรูปลง Database ---
    await prisma.user.update({
      where: { email: session.user.email },
      data: { image: imageUrl },
    });
    // ---------------------------------------

    return NextResponse.json({ url: imageUrl });
  } catch (error) {
    console.error("Update failed:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}