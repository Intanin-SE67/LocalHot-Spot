"use client";
import { useRouter } from "next/navigation";
import Navbar from "../../navbar";
import { Weight } from "lucide-react";
import { useState } from "react";


export default function PublicCreatePage() {
  const router = useRouter();
  const [language, setLanguage] = useState("");
  const [visibility, setVisibility] = useState("");
  const [category, setCategory] = useState("");

  const handleNext = () => {
    if (!language || !visibility || !category) {
        alert("Please fill in all fields.");
        return;
    }
    router.push("../history");
  };

  return (
    <div>
      <Navbar />
        
      <div className="container-text">
        <h1 style={{ fontSize: '35px', fontWeight: 'bold' }}>Edit Worldcup</h1>
        <div className="menu-sort">
          <span >Cover</span> |
          <span > Choices</span> |
          <span style={{ color: '#BC4126'}}> Public</span>
        </div>
      </div>


      <div className="container-create">
        <p className="p-create">Language</p>
        <div className="line"></div>
          
          <select className="input-text" id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="">--- Select Language ---</option>
            <option value="English">English</option>
            <option value="Thai">ไทย</option>
          </select>
          



        <p className="p-create">Visibility</p>
        <div className="line"></div>
          
          <select className="input-text" id="visibility" value={visibility} onChange={(e) => setVisibility(e.target.value)}>
            <option value="">--- Select Visibility ---</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
            <option value="Closed">Closed</option>
          </select>



        <p className="p-create">Category</p>
        <div className="line"></div>

            <select className="input-text" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">--- Select Category ---</option>
                <option value="Restaurants">Restaurants</option>
                <option value="Tourist-Attractions">Tourist Attractions</option>
                <option value="Convenience-Stops">Convenience Stops</option>
                <option value="Other">Other</option>
            </select>


        <div className="container-button-button">
            <button onClick={() => router.push("/create/choices")} className="button-create">&lt;Choices</button>
          <button onClick={handleNext} className="button-create">Public</button>
        </div>
      </div>
    </div>
  );
}