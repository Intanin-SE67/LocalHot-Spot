import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import NavbarWrapper from "../../components/navbarwrapper";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/server";
import { prisma } from "@/lib/prisma";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}>) {
  const { id } = await params;
  const session = await getSession(); // ป้องกันการเข้าถึงหน้า/create โดยยังไม่ได้ login
  if (!session) {
    redirect("/auth/login");
  }
  const question = await prisma.create.findUnique({
    where: { id: Number(id)}
  });
  if (!question || question.userId !== session.user.id) {
    redirect("/")
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}