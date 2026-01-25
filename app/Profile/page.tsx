import Navbar from "../navbar";

export default function HistoryPage() {
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
      </div>



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
      </div>
    </div>
  );
}