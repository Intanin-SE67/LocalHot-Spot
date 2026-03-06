"use client";
import { useRouter } from "next/navigation";
import { useCreateStore } from "../store";
import { useState } from "react";
import { Pen } from 'lucide-react';
import { Trash2 } from 'lucide-react';

export default function ChoicesPage() {
  const router = useRouter(); //state เช่น choices,imageFile,edittext,searchInput,search,sortimg และฟังก์ชันต่างๆ เช่น handleUpload,handleNext
  const { choices, setData } = useCreateStore();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [edittext, setEditText] = useState(false);
  
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const filterredChoices = choices.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));

  const [sortimg, setSortimg] = useState("");

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
            <select className="input-text" style={{width: '200px', height: '50px', marginLeft: '10px',textAlign: 'center'}} 
            value={sortimg} 
            onChange={(e) => setSortimg(e.target.value)}>
              <option value="">----- Select sort -----</option>
              <option value="asc">Sort by Name A-Z</option>
              <option value="desc">Sort by Name Z-A</option>
            </select>
        </div>
        
        {/*-------------- เทสเทส  -------------------*/}
        <div style={{display:"flex", justifyContent:"center"}}>
          <div className="choices-grid">
            {choices
            .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              if (sortimg === "asc") {
                return a.name.localeCompare(b.name);
              }
              if (sortimg === "desc") {
                return b.name.localeCompare(a.name);
              }
              return 0;
            })
            .map((choice: any) => (
              <div key={choice.id} className="choice-card">
                
                <div className="choice-header">
                  <img src={choice.image} className="choice-image" />
                  <div>
                    <button onClick={() =>setData({choices: choices.filter((c) => c.id !== choice.id),})} style={{width: '30px', height: '30px', background:"#3E3E4E", borderRadius:"50%",display:"flex", alignItems:"center", justifyContent:"center"}}>
                      <Trash2 size={"20px"}/>
                    </button>
                    <button onClick={() => setEditText(!edittext)} style={{width: '30px', height: '30px', background:"#BC4126", borderRadius:"50%",display:"flex", alignItems:"center", justifyContent:"center",marginTop: '3px'}}>
                      <Pen size={"20px"}/>
                    </button>
                  </div>
                  
                </div>
                  
                <div className="choice-footer">
                  <input
                    type="text"
                    placeholder="Name"
                    value={choice.name}
                    readOnly={!edittext}
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
                    readOnly={!edittext}
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