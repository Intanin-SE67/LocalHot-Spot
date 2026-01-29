"use client";
import { useRouter } from "next/navigation";
import { Link2 } from 'lucide-react';
import { useState } from "react";
import { House } from 'lucide-react';

export default function FinishPlayPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const isFormComplete = title.trim() !== "" && description.trim() !== "";
  
   const handleNext = () => {
    router.push("../");
  };
  return (
    <div className="model-play" style={{backgroundColor:'#05060C'}}>
        <div className="model-play-content" style={{aspectRatio:'6/7',width:'60%',maxWidth:'900px',backgroundColor:'#202020',padding:'5px 0px'}}>
            <div style={{borderBottom:'2px solid #D4D4D4',width:'90%'}}>
                <p style={{fontSize:'clamp(35px,2vw,2vw)',fontWeight:'bold',textAlign:'center',padding:'15px 0px'}}>Share your final winner!</p>
            </div>

            <div style={{width:'90%',height:'60%',margin:'25px 0px 0px 0px',padding:'15px 50px',backgroundColor:'#222220',borderRadius:'15px',filter:'drop-shadow(8px 8px 10px #151414'}}>
                <p style={{fontSize:'clamp(27px,1.4vw,1.4vw)',fontWeight:'bold',textAlign:'center',padding:'0px 0px'}}>pachai</p>
                <img src="../../images/pachai.jpg" style={{width:'100%',height:'80%',borderRadius:'15px' ,border:'#E30000 4px solid'}}/>
                <div style={{display:'flex',justifyContent:'space-between' ,marginTop:'25px'}}>
                    <p style={{fontSize:'clamp(15px,0.6vw,0.6vw)'}}>Big Thanks to sirichai wansa</p>
                    <h1 className="main-title" style={{fontSize:'clamp(20px,1vw,1vw)',textIndent:'1em'}}><a href="../"> LocalhosT SpoT</a></h1>
                </div>
            </div>

            <button  onClick={handleNext} className="button-create" style={{maxWidth:'960px',width:'60%',height:'70px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'20px',margin:'30px 0px'}}>
              <House size={30}/>
              <p style={{fontSize:'clamp(30px,1.5vw,1.5vw)'}}>Go Home Page</p>
            </button>  

            <div style={{display:'flex',alignItems:'center' ,justifyContent:'center',width:'95%',marginBottom:'20px'}}>
                <p className="input-text" style={{margin:'0px',width:'60%',alignItems:'center',display:'flex',justifyContent:'left',borderRadius:'20px 0px 0px 20px'}}>
                    https://maps.app.goo.gl/3zyKjgH74pmCknYB7
                </p>
                <button className="button-create" style={{height:'50px',borderRadius:'0px 20px 20px 0px',display:'flex',alignItems:'center' ,justifyContent:'center' }}><Link2 size={30}/></button>
            </div> 
        </div>
    </div>
    

     
  );
}