
import "./globals.css";
import Category from "./components/Category";
import Navbar from "./components/navbarfront";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/server";

export default async function Home() {
  const creates = await prisma.create.findMany({
    //include คือ ให้ Create ดึงข้อมูลuser ที่เป็นเจ้าของมาด้วย
    include: {
      user: true
    }
  });
  return (
    <>
      <Navbar />
      <main>
        <div className="card-container">


          {creates.map((item) =>(
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
