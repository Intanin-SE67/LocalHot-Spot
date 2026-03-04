"use client";
import { useRouter } from "next/navigation";
import Navbar from "../../navbar";

import { useCreateStore } from "../store";
import { useState } from "react";


export default function ChoicesPage() {
  const router = useRouter();
  const { choices, setData } = useCreateStore();
  const [imageFile, setImageFile] = useState<File | null>(null);
  
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const filterredChoices = choices.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));

  {/*ฟังชันการอัพโหลดไฟล์รูป และเก็บไว้ใน store*/ }
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newChoices = Array.from(files).map((file) => ({
      id: crypto.randomUUID(),
      image: URL.createObjectURL(file),
      name: file.name.replace(/\.[^/.]+$/, ""), //เอานามสกุลออกจากชื่อไฟล์
      externalUrl: "",
      file: file,
    }));

    setData({ choices: [...choices, ...newChoices] });
  };

  const handleNext = async () => {//Promise.all จะรอให้ทุก async ใน map เสร็จแล้วรวมค่าที่ return ทั้งหมดเป็น array
    const uploadPromises = await Promise.all(
      choices.map(async (choice: any) => {
        if (!choice.file) return choice;

        const formData = new FormData();
        formData.append("file", choice.file);

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        return { ...choice, image: data.secure_url ,file: undefined};
      })
    );

    setData({ choices: uploadPromises });
    router.push("/create/public-create");
  };

  return (
    <div>
      <Navbar />
        
      <div className="container-text">
        <h1 style={{ fontSize: '35px', fontWeight: 'bold' }}>Edit Worldcup</h1>
        <div className="menu-sort">
          <span >Cover</span> |
          <span style={{ color: '#BC4126'}}> Choices</span> |
          <span> Public</span>
        </div>
      </div>


      <div className="container-create" style={{paddingBottom: '10px'}}>
        <p className="p-create">Type</p>
        <div className="line"></div>
        {/* <div className="container-input" style={{padding: '0px auto'}}> */}
          <img src="../../images/image-type.png" className="img-input" style={{ width: 400, margin: '0px auto'}}/>

          
          
          
        {/* </div} */}


        {/*-------------- เทสเทส  -------------------*/}
         <p className="p-create">Upload Images</p>
        <div className="line"></div>
        {/* <div className="container-input"> */}
        <label style={{cursor:"pointer",display:"block",textAlign:"center"} }>
            <img src="../../images/upload-img.png" className="img-input" style={{margin: '0px auto'}}></img>
          
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleUpload}
              hidden
            />
          </label>  
        {/* </div> */}
        {/*-------------- ค้นหาที่อัพโหลด -------------------*/}

        
         <p className="p-create">Choices</p>
        <div className="line"></div>
        <div>
            <input 
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)} 
            className="input-text" 
            style={{width: 'auto',minWidth: '600px',height: '50px'}}></input>
            <button  className="button-create" style={{ height: 50}} onClick={() => setSearch(searchInput)}>search</button>
            <select className="input-text" style={{width: '200px', height: '50px', marginLeft: '10px',textAlign: 'center'}}>
              <option value="">----- Select sort -----</option>
              <option value="Public">Sort by Name A-Z</option>
              <option value="Public">Sort by Name Z-A</option>
            </select>
        </div>
        
        {/*-------------- เทสเทส  -------------------*/}
        <div className="choices-grid">
          {choices
          .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
          .map((choice: any) => (
            <div key={choice.id} className="choice-card">
              <img src={choice.image} className="choice-image" />

              <div className="choice-footer">
                <p>{choice.name}</p>

                <button
                  onClick={() =>
                    setData({
                      choices: choices.filter((c) => c.id !== choice.id),
                    })
                  }
                >
                  ❌
                </button>
                <input
                  type="text"
                  placeholder="Name"
                  value={choice.name}
                  onChange={(e) =>
                    setData({
                      choices: choices.map((c) =>
                        c.id === choice.id ? { ...c, name: e.target.value } : c
                      ),
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="External URL"
                  value={choice.externalUrl}
                  onChange={(e) =>
                    setData({
                      choices: choices.map((c) =>
                        c.id === choice.id ? { ...c, externalUrl: e.target.value } : c
                      ),
                    })
                  }
                />
              </div>
            </div>
          ))}
        </div>
        {/*-------------- เทสเทส สำหรับทดสอบและเรียนรู้เท่านั้น!!! -------------------*/}


        <div className="container-button-button">
            <button onClick={() => router.push("/create/cover")} className="button-create">&lt;cover</button>
          <button onClick={handleNext} className="button-create">Public&gt;</button>
        </div>
      </div>
    </div>
  );
}