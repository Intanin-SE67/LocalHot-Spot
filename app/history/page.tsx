import Navbar from "../navbar";
import { prisma } from "@/lib/prisma";

export default async function HistoryPage() {
  const creates = await prisma.create.findMany();
  return (
    <div>
      <Navbar />
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
              <img
                src={create.coverImage ?? "../"}
                alt={create.title}
                className="img-card"
                style={{objectFit:'cover'}}
              />
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
