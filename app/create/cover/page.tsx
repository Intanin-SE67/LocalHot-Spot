"use client";
import { useRouter } from "next/navigation";
import Navbar from "../../navbar";
import { useState } from "react";
import { title } from "process";

export default function CoverPage() {
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
        <input type="text" placeholder="Tile" className="input-text" value={title} onChange={(e) => setTitle(e.target.value)}></input>


        <p className="p-create">Description</p>
        <div className="line"></div>
        <textarea placeholder="Description" className="input-area" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

        
        <p className="p-create">Cover Image</p>
        <div className="line"></div>
        <img src="#" className="img-input"></img>


        <div className="container-button">
          <button onClick={handleNext} className="button-create">Choices&gt;</button>
        </div>
      </div>
    </div>
  );
}