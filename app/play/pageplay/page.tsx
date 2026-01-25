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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const isFormComplete = title.trim() !== "" && description.trim() !== "";
  
  const handleNext = () => {
    if (!isFormComplete) {
        alert("Please fill in all fields.");
        return;
    }
    router.push("/create/choices");
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
          </div>
        </div> 

        {/* ---------------- Right ---------------- */}
        <div className="container-text right-column" style={{gap: '5px', alignItems:'center'}}>
          <div style={{width:'75%',gap:'30px',display:'flex',flexDirection:'column'}}>
            <img src="../../images/อาหารตามสั่ง_Bodynew2.jpg" alt="" className="img-card-play"/>
            <button  className="button-create" style={{width:'100%',height:'90px'}}>
              <p style={{fontSize:'40px'}}>Play</p>
            </button>
          </div>
          
          <div style={{marginTop:'150px',width:'75%'}}>
            <div style={{display:'flex', marginBottom:'30px', gap:'50px', alignItems:'center',fontSize:'20px'}}>
              <p style={{width:'150px'}}>Nickname</p>
              <input type="text" placeholder="Add Your Nickname" className="input-text" style={{width:'450px'}}></input>
              <p style={{display:'flex',gap:'10px'}}>
                <input type="checkbox" style={{width:'20px',height:'20px'}}></input>
                <span>Anonymous</span>
              </p>
            </div>
            <div style={{display:'flex', marginBottom:'30px', gap:'50px', alignItems:'center',fontSize:'20px'}}>
              <p style={{width:'150px'}}>Your Comments</p>
              <input type="text" placeholder="Add Your Comments" className="input-text" style={{width:'450px'}}></input>
            </div>

            <div style={{textAlign:'right',paddingRight:'10px'}}>
              <button className="button-create" style={{width:'100px', height:'50px'}}>Comment</button>
            </div>
            
          </div>

          <div style={{marginTop:'80px',width:'75%'}}>
            <h2 style={{fontSize:'25px', fontWeight:'bold', marginBottom:'25px'}}>Comments (31)</h2>
            <div style={{ alignItems:'center', gap:'10px'}}>
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

      
      
      

     


      
    </div>
  );
}