
"use client"
import "./globals.css";
import Category from "./components/Category";
import Navbar from "./components/navbarfront";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/server";
import { useSearchStore } from "app/components/store/searchStore";
import { useState } from "react";

export default function Home({creates }: { creates : any[]}) {
    const { search } = useSearchStore()
    const [showModel , setShowModel] = useState(false);
    const handleShowModel = () => setShowModel(!showModel)          //เปลี่ยน false เป็นture คือเปลี่ยนไปเปลี่ยนมา

  return (
    <>
      <Navbar handleShowModel={handleShowModel}/>                   {/*คือมันบอกnavbarว่า อันนี้คือปุ่มเปิดปิดโมเดล  ถ้ามีfuncชั้นไหนหรือปุ่มไหนที่มีหน้าตาเด้งขึ้นมาได้  ก็ให้ใช้คำสั่งนี้*/}
      <main>
        <div className="card-container">


          {creates
          .filter((item: any) => item.title.toLowerCase().includes(search.toLowerCase()))
          .map((item) =>(
              <div className="card" key={item.id}>
                <a href={`/play/${item.id}`}>
                  <img
                    src={item.coverImage ?? "../"}
                    alt={item.title}
                    className="img-card"
                    style={{objectFit:'cover'}}
                  />

                  <div className="card-header">
                    <p>{item.category}</p>
                    <div className="p-user">
                      <img src ="#" className="img-card-header"/>
                      <span>{item.user?.name}</span>
                    </div>
                  </div>

                  <div className="card-body">
                    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                      {item.title}
                    </p>
                    <p style={{opacity: 0.5}}>
                      {item.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}

         


        </div>
        
      </main>
    </>
  );
}
