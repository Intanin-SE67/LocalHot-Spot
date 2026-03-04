"use client";
import {useState} from "react";
import "./globals.css";
import Category from "./components/Category";
import Navbar from "./components/navbar";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const [showModel, setShowModel] = useState(false);
  const handleShowModel = () => {
    setShowModel(!showModel);
  };
  const restaurants = await prisma.restaurant.findMany();
  return (
    <html lang="en">
      <body>
        {showModel && <Category handleShowModel={handleShowModel} />}
          <Navbar handleShowModel={handleShowModel} />
          <div className="card-container">
            {restaurants.map((item) =>(
                <div className="card" key={item.id}>
                  <a href={`/play/${item.id}`}>
                    <img
                      src={item.imageUrl ?? "../"}
                      alt={item.name}
                      className="img-card"
                      style={{objectFit:'cover'}}
                    />

                    <div className="card-header">
                      <p>{item.category}</p>
                      <div className="p-user">
                        <img src ="#" className="img-card-header"/>
                        <span>{item.category}</span>
                      </div>
                    </div>

                    <div className="card-body">
                      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        {item.name}
                      </p>
                      <p style={{opacity: 0.5}}>
                        {item.description}
                      </p>
                    </div>
                  </a>
                </div>))}
          </div>
      </body>
    </html>
  );
}
