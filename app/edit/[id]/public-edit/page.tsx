"use client";
import { useRouter, useParams } from "next/navigation";
import { useEditStore } from "../store";

export default function PublicCreatePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const title = useEditStore((state) => state.title);
  const description = useEditStore((state) => state.description);
  const coverImage = useEditStore((state) => state.coverImage);
  const language = useEditStore((state) => state.language);
  const category = useEditStore((state) => state.category);
  const visibility = useEditStore((state) => state.visibility);
  const choices= useEditStore((state) => state.choices);
  const setData = useEditStore((state) => state.setData);
  /*const { language, visibility, category, setData } = useEditStore();
  const editData = useEditStore((state) => ({
    title: state.title,
    description: state.description,
    coverImage: state.coverImage,
    language: state.language,
    category: state.category,
    visibility: state.visibility,
    choices: state.choices,
  }));*/

  const handleNext = async () => {
    const editData = {
      title,
      description,
      coverImage,
      language,
      category,
      visibility,
      choices
    };
    {/*สำหรับถ้าไม่เติมจะไปหน้าถัดไปไม่ได้ */}
    if (!language || !visibility || !category) {
        alert("Please fill in all fields.");
        return;
    }
    {/*ส่งข้อมูลทั้งหมดไปยัง API เพื่อบันทึกลงฐานข้อมูล */}
    const res = await fetch(`/api/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json",},
      body: JSON.stringify(editData), //แปลงcreateData เป็น JSON string เพื่อส่งไปยัง API
    });

    if (!res.ok) {
      alert("Failed to Update Question.");
      return;
    }
    router.push("../../history");
    
  };

  return (
    <div>
      <div className="container-text">
        <h1 style={{ fontSize: '35px', fontWeight: 'bold' }}>Edit Question</h1>
        <div className="menu-sort">
          <span >Cover</span> |
          <span > Choices</span> |
          <span style={{ color: '#BC4126'}}> Public</span>
        </div>
      </div>

      <div className="container-create">
        <p className="p-create">Language</p>
        <div className="line"></div>
          <select className="input-text" id="language" value={language} onChange={(e) => setData({language: e.target.value})}>
            <option value="">--- Select Language ---</option>
            <option value="English">English</option>
            <option value="Thai">ไทย</option>
          </select>
          
        <p className="p-create">Visibility</p>
        <div className="line"></div>
          <select className="input-text" id="visibility" value={visibility} onChange={(e) => setData({visibility: e.target.value})}>
            <option value="">--- Select Visibility ---</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
            <option value="Closed">Closed</option>
          </select>

        <p className="p-create">Category</p>
        <div className="line"></div>
            <select className="input-text" id="category" value={category} onChange={(e) => setData({category: e.target.value})}>
                <option value="">--- Select Category ---</option>
                <option value="Restaurants">Restaurants</option>
                <option value="Tourist-Attractions">Tourist Attractions</option>
                <option value="Convenience-Stops">Convenience Stops</option>
                <option value="Other">Other</option>
            </select>

        <div className="container-button-button">
            <button onClick={() => router.push(`/edit/${id}/choices`)} className="button-create">&lt;Choices</button>
          <button onClick={handleNext} className="button-create">Public</button>
        </div>

      </div>
    </div>
  );
}