"use client"
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';



export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter();
  const Delete = async (id: number) => {
    const res = await fetch(`/api/delete/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
  };
  return (
    <button onClick={() => Delete(id)} style={{width: '30px', height: '30px', background:"#3E3E4E", borderRadius:"50%",display:"flex", alignItems:"center", justifyContent:"center"}}>
      <Trash2 size={"20px"}/>
    </button>
  );
}