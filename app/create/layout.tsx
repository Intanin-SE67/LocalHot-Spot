import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NavbarWrapper from "../components/navbarwrapper";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/server";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession(); // ป้องกันการเข้าถึงหน้า/create โดยยังไม่ได้ login
  if (!session) {
    redirect("/auth/login");
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