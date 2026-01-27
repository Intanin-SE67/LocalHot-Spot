"use client";
import { useRouter } from "next/navigation";
import Navbar from "../../navbar";
import { useState } from "react";
import { Play } from 'lucide-react';
import { title } from "process";

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
    <div className="bg-play">
      <Navbar />
      <div className="container-text" style={{margin:'100px auto',padding:'20px 0 100px 0',display:'flex', justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'15px',}}>
        <h1 style={{ fontSize: '45px', fontWeight: 'bold' }}>Name Question.....</h1>
        <p className="button-create" style={{width:'180px',alignItems:'center',display:'flex',justifyContent:'center'}}>32 Round 1/16</p>
      </div>

      <div className="play-select">
        <div className="img-play" >
          <img src="../../images/pachai.jpg" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'15px' ,border:'#E30000 4px solid'}}/>
          <button className="button-create" style={{marginTop:'15px',height:'50px',width:'30%',backgroundColor:'#E30000',fontSize:'20px'}}>--pachai--</button>
        </div>
        
        <div style={{height:'15vw',width:'9vw',justifyContent:'center',alignItems:'center',display:'flex' ,minWidth:'50px' ,minHeight:'100px'}}>
          <img src="../../images/vs.png" style={{backgroundColor:'transparent',height:'100%',width:'100%'}}/>
        </div>
        

        <div className="img-play" >
          <img src="../../images/pafai.jpg" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'15px',border:'#0088E3 4px solid'}}/>
          <button className="button-create" style={{marginTop:'15px',height:'50px',width:'30%' ,backgroundColor:'#0088E3',fontSize:'20px'}}>--pafai--</button>
        </div>
        
      </div>

      <div style={{display:'flex',justifyContent:'center',alignItems:'center', margin:'200px'}}>
        <p style={{fontSize:'25px'}}>Power By </p>
        <h1 className="main-title" style={{fontSize:'30px',textIndent:'1em'}}><a href="../"> LocalhosT SpoT</a></h1>
      </div>
    </div>

     
  );
}