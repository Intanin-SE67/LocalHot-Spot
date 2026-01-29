"use client";
import { useRouter } from "next/navigation";
import Navbar from "../../navbar";
import { useState } from "react";
import { Play } from 'lucide-react';
import { title } from "process";
import { Bookmark } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { CornerDownRight } from 'lucide-react';

export default function PlayPage() {
  const router = useRouter();
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleNext = () => {
    router.push("/play/startplay");
  };

  return (
    <div>
      <Navbar />
      <div className="container-play">
        {/* ---------------- Left ---------------- */}
        <div className="container-text left-column" style={{gap: '5px'}}>
          <div style={{display: 'flex',gap: '5px', alignItems: 'center'}}>
            <Play size={15}/>
            <p>150+</p>
          </div>
          
          <h1 style={{ fontSize: '35px', fontWeight: 'bold' ,marginBottom: '25px'}}> A la carte restaurant</h1>
          <p>Top subscribe from 28/12/2025</p>
          <div style={{display: 'flex' ,gap:'10px',marginTop: '15px'}}>
            <button className="button-play"><Bookmark size={20}/>Bookmark</button>
            <button className="button-play"><ThumbsUp size={20}/>Like</button>
          </div>

          <div style={{display: 'flex' ,gap:'10px',marginTop: '25px',alignItems: 'center'}}>
            <img src ="#" className="img-card-header" style={{width:'30px',height:'30px'}}/>
            <p style={{fontSize: '20px'}}>By sirichai wansa</p>
            <p style={{color: '#727670'}}>By sirichai wansa</p>
          </div>
          <button className="button-create" style={{width:'200px',borderRadius:'20px',margin:'20px'}}>subscribe</button>

          <div style={{paddingTop: '100px'}}>
            <table className="table-play">
              <thead style={{borderBottom:'2px solid #D4D4D4'}}>
                <tr>
                  <td >#</td><td>Media</td><td>Name</td><td >Win Ratio</td><td >Final Win Ratio</td>
                </tr>
              </thead>

              <tbody style={{borderBottom:'2px solid #D4D4D4'}}>
                <tr>
                  <td>1</td>
                  <td><img src="../../images/pachai.jpg"  style={{width:'auto',height:'auto'}}/></td>
                  <td>pachai</td>
                  <td>100%</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><img src="../../images/pafai.jpg"  style={{width:'auto',height:'auto'}}/></td>
                  <td>pafai</td>
                  <td>83%</td>
                  <td>0%</td>
                </tr>
              </tbody>
            </table>
            <div style={{textAlign:'center', margin:'0px auto' ,paddingTop:'15px'}}>
              <button id="showmoreBtn" className="button-create" style={{width:'150px'}}>Show more</button>
            </div>
            
          </div>
        </div> 

        {/* ---------------- Right ---------------- */}
        <div className="container-text right-column" style={{gap: '5px', alignItems:'center'}}>
          <div style={{width:'75%',gap:'30px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <img src="../../images/อาหารตามสั่ง_Bodynew2.jpg" alt="" className="img-card-play"/>
            <button onClick={handleOpen} className="button-create" style={{maxWidth:'960px',width:'90%',height:'90px'}}>
              <p style={{fontSize:'40px'}}>Play</p>
            </button>
          </div>
          
          <div style={{marginTop:'150px',width:'75%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div style={{display:'flex', marginBottom:'30px', gap:'50px', alignItems:'center',fontSize:'20px',width:'80%'}}>
              <p style={{width:'150px'}}>Nickname</p>
              <input type="text" placeholder="Add Your Nickname" className="input-text" style={{width:'450px'}}></input>
              <p style={{display:'flex',gap:'10px'}}>
                <input type="checkbox" style={{width:'20px',height:'20px'}}></input>
                <span>Anonymous</span>
              </p>
            </div>
            <div style={{display:'flex', marginBottom:'30px', gap:'50px', alignItems:'center',fontSize:'20px',width:'80%'}}>
              <p style={{width:'150px'}}>Your Comments</p>
              <input type="text" placeholder="Add Your Comments" className="input-text" style={{width:'450px'}}></input>
            </div>

            <div style={{textAlign:'right',paddingRight:'10px',width:'80%'}}>
              <button className="button-create" style={{width:'100px', height:'50px'}}>Comment</button>
            </div>
            
          </div>

          <div style={{marginTop:'80px',width:'75%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h2 style={{fontSize:'25px', fontWeight:'bold', marginBottom:'25px'}}>Comments (31)</h2>

            <div style={{ alignItems:'center', gap:'10px',width:'80%'}}>
              <div style={{display:'flex',alignItems:'center',gap:'10px', marginBottom:'15px',justifyContent:'space-between'}}>
                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                   <img src ="#" className="img-card-header" style={{width:'30px',height:'30px'}}/>
                  <p>Anonymous</p>
                  <p>(12day)</p>
                </div>
                <div>
                  <ThumbsUp size={25} />
                </div>
               
              </div>
              <div style={{paddingLeft:'50px'}}>
                <p>Very good</p>
                <p style={{display:'flex',alignItems:'center',gap:'5px', marginTop:'10px'}}>
                  <CornerDownRight size={25}/>
                  <span style={{fontSize:'14px'}}>Reply</span>
                </p>
              </div>
              
              
            </div>
          </div>
          
        </div>
      </div>

      {/* ---------------- Modal Play ---------------- */}
      
      {isOpen && (
        <div className="model-play" onClick={handleClose}>
            <div className="model-play-content" onClick={(e) => e.stopPropagation()}>
              <div style={{width:'80%',maxWidth:'900px',display:'flex',justifyContent:'left',marginTop:'10px',marginBottom:'25px'}}>
                <p style={{fontSize:'35px'}}>No. of Choices</p>
              </div>
              
              <select className="input-text" id="category" style={{backgroundColor:'#595959',width:'80%',maxWidth:'900px', marginBottom:'40px'}} >
                <option value="">---- Select Round ----</option>
                <option value="Restaurants">8 Round</option>
                <option value="Tourist-Attractions">16 Round</option>
                <option value="Convenience-Stops">32 Round</option>
                <option value="Other">64 Round</option>
              </select>
              
              <button onClick={handleNext} className="button-create" style={{maxWidth:'500px',width:'70%',height:'60px', margin:'20px',borderRadius:'20px'}}>
                <p style={{fontSize:'40px'}}>Start</p>
              </button>
            </div>
          </div>
      )}



      
    </div>
  );
}