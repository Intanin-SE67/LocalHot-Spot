'use client';

import React, { useRef, useState, ChangeEvent } from 'react';

export default function ProfileImageUpload({ initialImage }: { initialImage?: string | null }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  // ใช้ค่าจาก Database (initialImage) ถ้าไม่มีให้ใช้รูป Default
  const [previewUrl, setPreviewUrl] = useState<string>(initialImage || "/images/image-type.png");

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        // 1. ส่งไฟล์ไปที่ API (เช็ค path ให้ตรงกับโฟลเดอร์ api ของคุณ เช่น /api/upload-profile)
        const res = await fetch('/api/upload-profile', { 
          method: 'POST',
          body: formData,
        });

        const data = await res.json();

        if (res.ok) {
          // 2. อัปเดต State ชั่วคราว
          setPreviewUrl(data.url);
          
          alert("อัปโหลดสำเร็จ!");

          // 3. สำคัญที่สุด: สั่งให้หน้าเว็บโหลดใหม่เพื่อให้ getSession ดึงค่าล่าสุดจาก DB
          window.location.reload(); 
        } else {
          alert("อัปโหลดไม่สำเร็จ: " + data.error);
        }
      } catch (err) {
        console.error(err);
        alert("เกิดข้อผิดพลาดในการเชื่อมต่อ Server");
      }
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        style={{ display: 'none' }} 
        accept="image/*" 
      />
      <img 
        src={previewUrl} 
        onClick={() => fileInputRef.current?.click()}
        style={{ 
          width: 400, 
          height: 'auto', 
          cursor: 'pointer', 
          borderRadius: '8px',
          border: '1px solid #333' 
        }} 
        alt="Profile"
      />
      <p style={{ fontSize: '12px', color: '#888', marginTop: '8px' }}>คลิกเพื่อเปลี่ยนรูป</p>
    </div>
  );
}