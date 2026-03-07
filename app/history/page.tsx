import { prisma } from "@/lib/prisma";
import { Pen } from 'lucide-react';
import DeleteButton from "./deletebutton";
import { getSession } from "@/lib/server";
import { redirect } from "next/navigation";

export default async function HistoryPage() {
  const session = await getSession();
  if (!session) {
    redirect("/auth/login");
  }
  const creates = await prisma.create.findMany();
  return (
    <div>
      <div className="container-text">
        <h1 style={{ fontSize: '35px', fontWeight: 'bold' }}>My WorldCup</h1>
        <div className="menu-sort">
          <span style={{ color: '#BC4126'}}>Latest</span> |
          <span> Oldest</span> |
          <span> Random</span>
        </div>
      </div>

      {/* ------------------------ card ที่สร้าง ------------------ */}
      <div className="container">
        {creates.map((create) => (
          <div className="card" key={create.id}>
            {/*<a href={`/play/${create.restaurantId}`}>)*/}
              <div className="img-card" style={{height:'60%',position:'relative'}}>
                <div style={{position:'absolute',top: '10px', right: '1%',display:'flex',flexDirection:'column',textAlign:'end',}}>
                  <DeleteButton id={create.id} />
                  <button style={{width: '30px', height: '30px', background:"#BC4126", borderRadius:"50%",display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Pen size={"20px"}/>
                  </button>
                </div>
                <img
                  src={create.coverImage || "../"}
                  alt={create.title}
                  style={{objectFit:'cover' ,height:'100%',width:'100%'}}
                />
              </div>
              
              <div className="card-header">
                <p>{create.category}</p>
                <div className="p-user">
                  <img src ="#" className="img-card-header"/>
                  <span>{create.category}</span>
                </div>
              </div>
              <div className="card-body">
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  {create.title}
                </p>
                <p style={{opacity: 0.5}}>
                  {create.description}
                </p>
              </div>
            {/*</a>*/}
          </div>
        ))}
      </div>

      {/* ------------------------ card ที่เล่น ------------------ */}
      <div className="container-text">
        <h1 style={{ fontSize: '35px', fontWeight: 'bold' }}>Play History</h1>
        <div className="menu-sort">
          <span style={{ color: '#BC4126'}}>Latest</span> |
          <span> Oldest</span> |
          <span> Random</span>
        </div>
      </div>
      <div className="container">
        <div className="card">

            <img src="../images/อาหารตามสั่ง_Bodynew2.jpg" alt="" className="img-card"/>
            <div className="card-header">
              <p>restaurant</p>
              <p className=" p-user">
                <img src ="#" className="img-card-header"/>
                restaurant
              </p>
            </div>
            <div className="card-body">
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                A la carte restaurant
              </p>
              <p style={{opacity: 0.5}}>
                Architect & Engineer
              </p>
            </div>
            
        </div>

        <div className="card">

            <img src="../images/อาหารตามสั่ง_Bodynew2.jpg" alt="" className="img-card"/>
            <div className="card-header">
              <p>restaurant</p>
              <p className=" p-user">
                <img src ="#" className="img-card-header"/>
                restaurant
              </p>
            </div>
            <div className="card-body">
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                A la carte restaurant
              </p>
              <p style={{opacity: 0.5}}>
                Architect & Engineer
              </p>
            </div>
            
        </div>

        <div className="card">

            <img src="../images/อาหารตามสั่ง_Bodynew2.jpg" alt="" className="img-card"/>
            <div className="card-header">
              <p>restaurant</p>
              <p className=" p-user">
                <img src ="#" className="img-card-header"/>
                restaurant
              </p>
            </div>
            <div className="card-body">
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                A la carte restaurant
              </p>
              <p style={{opacity: 0.5}}>
                Architect & Engineer
              </p>
            </div>
            
        </div>
      </div>
    </div>
  );
}
