"use client";
import {useState} from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Category from "../components/Category";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const [showModel, setShowModel] = useState(false);
const handleShowModel = () => {
  setShowModel(!showModel);
};
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar handleShowModel={handleShowModel} />
        {children}
        {showModel && <Category handleShowModel={handleShowModel} />}
      </body>
    </html>
  );
}