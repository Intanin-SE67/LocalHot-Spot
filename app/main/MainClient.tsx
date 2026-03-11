"use client"
import { useState } from "react";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/server";
import { redirect } from "next/navigation";
import { useSearchStore } from "app/components/store/searchStore";


export default function Home({creates }: { creates : any[]}) {
    const { search } = useSearchStore()
  return (
        <div className="card-container">
          {/*<p>Welcome, {email}!</p> เช็ค emailที่ใช้อยู่*/}

          {creates
          .filter((item: any) => item.title.toLowerCase().includes(search.toLowerCase()))
          .map((item:any) =>(
              <div className="card" key={item.id}>
                <a href={`/play/${item.id}`}>
                  <img
                    src={item.coverImage || "../"}
                    alt={item.title}
                    className="img-card"
                    style={{objectFit:'cover'}}/>

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
  );
}