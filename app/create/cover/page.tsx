"use client";
import { useRouter } from "next/navigation";
import Navbar from "../../navbar";
import { useState } from "react";
import { useCreateStore } from "../store";
import { text } from "stream/consumers";

export default function CoverPage() {
  const router = useRouter();
  const { title, description,coverImage, setData } = useCreateStore();
  const isFormComplete = title.trim() !== "" && description.trim() !== "";
 {/*สำหรับถ้าไม่เติมจะไปหน้าถัดไปไม่ได้ */} 
  const handleNext = () => {
    if (!isFormComplete) {
        alert("Please fill in all fields.");
        return;
    }
    router.push("/create/choices");
  };
  {/*สำหรับการสร้างเพิ่มรูปปกtitle */}
  const handleCoverUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setData({ coverImage: imageUrl });
  };

  return (
    <div>
      <Navbar />
        
      <div className="container-text">
        <h1 style={{ fontSize: '35px', fontWeight: 'bold' }}>Edit Worldcup</h1>
        <div className="menu-sort">
          <span style={{ color: '#BC4126'}}>Cover</span> |
          <span> Choices</span> |
          <span> Public</span>
        </div>
      </div>


      <div className="container-create">
        <p className="p-create">Title</p>
        <div className="line"></div>
        <input type="text" placeholder="Tile" className="input-text" value={title} onChange={(e) => setData({title: e.target.value})}></input>


        <p className="p-create">Description</p>
        <div className="line"></div>
        <textarea placeholder="Description" className="input-area" value={description} onChange={(e) => setData({description: e.target.value})}></textarea>

        
        <p className="p-create">Cover Image</p>
        <div className="line"></div>

        {/*------------------------- สำหรับการสร้างเพิ่มรูปปกtitle -------------------------*/}
        <label>
          <input type="file" accept="image/*" onChange={handleCoverUpload} hidden></input>
          {/*ถ้ามีรูปปกแล้วก็แสดงรูปปก ถ้ายังไม่มีให้แสดงข้อความให้คลิกเพื่ออัพโหลดรูปปก */}
          {coverImage ? (  
            <img src={coverImage || "#"} 
              className="img-input"
            />
          ) : (
            <p className="img-input" style={{display:"flex",alignItems:"center",justifyContent:"center",color:"#888"}}>
              Click to upload cover image
            </p>
          )}
        </label>
        {/*------------------------- -------------------------------- -------------------------*/}


        <div className="container-button">
          <button onClick={handleNext} className="button-create">Choices&gt;</button>
        </div>
      </div>
    </div>
  );
}