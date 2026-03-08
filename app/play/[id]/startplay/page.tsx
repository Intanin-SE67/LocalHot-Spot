"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Choice } from "@/generated/prisma";
import { useParams } from "next/navigation";


export default function PlayPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [currentpair, setCurrentPair] = useState<Choice[]>([]);
  const [choices, setChoices] = useState<Choice[]>([]);
  const [winners, setWinners] = useState<Choice[]>([]);
  const [index, setIndex] = useState(0);
  const [round, setRound] = useState(0);
  
  function shuffle(list: Choice[]) {
    return [...list].sort(() =>Math.random() - 0.5);              // ...list คือ copy Array เพื่อไม่ให้แก้arrayเดิม  .sort... สุ่มลำดับ array
  }
  useEffect(() => {                                               // React Hook ทำงานหลัง render
    if (!id) return;
    
    fetch(`/api/play/${id}`)
      .then(res => res.json())                                    //แปลง res เป็น obj
      .then(data => {                                             //จะได้data เป็น [{id:1,name:'pafai'},{id:2,name'pachai',...}]
        const shuffled = shuffle(data);                           //สลับลำดับข้อมูลในarray แบบสุ่ม
        setChoices(shuffled);
        setRound(shuffled.length);

        setCurrentPair([shuffled[0], shuffled[1]]);               //เลือกคู่แรกมาvs
        setIndex(2);                                              //เพื่อจะได้คู่ถัดไป
      });
  }, [id]);                                                       //เผื่อให้รู่ว่าหน้านี้คือ idอะไร

  const handlePick = (winner: Choice) =>{                         //winner: Choice ตัวที่userกดเลือก
    const newWinners = [...winners, winner];                      //การcopy arrayเดิม แล้วเพิ่มตัวใหม่เข้าไป เช่น winners = [pachai], winner = pafai  กลายเป็น newWinners = [pachia, pafai]
    setWinners(newWinners);                                       // อัพเดต state แล้ว randerหน้าใหม่

    if (index < choices.length) {                                 //เลือกคู่ vs  โดยเริ่มแรก index=0
      setCurrentPair([
        choices[index],                                           //choice[0] เช่น A
        choices[index + 1]                                        //choice[1] เช่น B
      ]);
      setIndex(index + 2);                                        //หลังเลือกตัวที่ชนะได้แล้ว กำหนดรอบถัดไปเริ่ม index[2] ก็ได้ C , D พอจบรอบ index = 4 จึงหยุดการทำงานเพราะ >choices.length 
    } else {
      if (newWinners.length === 1) {                              //เช็คว่าเหลือตัวที่ชนะตัวเดียวไหม
        const winner = newWinners[0];
        sessionStorage.setItem("winner", JSON.stringify(winner)); //เก็บตัวที่ชนะใน sessionStorage (dbเล็กๆในbrowser เก็บแบบkeyvalue โดยkey = winner value = ข้อมูลเช่น {id:1, name:"Pafai"}
        router.push("/play/end")                                  // .stringify เปลี่ยนข้อมูลเป็นstring เพราะJsonเก็บได้แค่ string
        return;
      }
      setChoices(newWinners);                                     //ตัวอย่าง newWinner = [A, D] คือรอบต่อไป A vs D
      setWinners([]);                                             //ล้าง winner เพื่อเก็บตัวที่ชนะถัดไป
      setIndex(2);
      setRound(newWinners.length);                                // ตย. round = 2

      setCurrentPair([                                            //ได้ A vs D
        newWinners[0],                                            //คือ A
        newWinners[1]                                             //คือ D
      ]);
    }
  };

  return (
    <div className="bg-play">
      <div className="container-text" style={{margin:'auto',padding:'20px 0 100px 0',display:'flex', justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'15px',}}>
        <h1 style={{ fontSize: '45px', fontWeight: 'bold' }}>Name Question.....</h1>
        <p className="button-create" style={{width:'180px',alignItems:'center',display:'flex',justifyContent:'center'}}>{round} Round {winners.length + 1}/{round/2}</p>
      </div>

      <div className="play-select">
        {currentpair.length === 2 && (
          <>
          <div className="img-play" >
            <img src={currentpair[0].image} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'15px' ,border:'#E30000 4px solid'}}/>
            <button onClick={() => handlePick(currentpair[0])}
            className="button-create" style={{marginTop:'15px',height:'50px',width:'30%',backgroundColor:'#E30000',fontSize:'20px'}}>{currentpair[0].name}</button>
          </div>
          
          <div style={{height:'15vw',width:'9vw',justifyContent:'center',alignItems:'center',display:'flex' ,minWidth:'50px' ,minHeight:'100px'}}>
            <img src="../../images/vs.png" style={{backgroundColor:'transparent',height:'100%',width:'100%'}}/>
          </div>
          

          <div className="img-play" >
            <img src={currentpair[1].image} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'15px',border:'#0088E3 4px solid'}}/>
            <button onClick={() => handlePick(currentpair[1])}
            className="button-create" style={{marginTop:'15px',height:'50px',width:'30%' ,backgroundColor:'#0088E3',fontSize:'20px'}}>{currentpair[1].name}</button>
          </div>
          </>
        )}
        
      </div>

      <div style={{display:'flex',justifyContent:'center',alignItems:'center', margin:'200px'}}>
        <p style={{fontSize:'25px'}}>Power By </p>
        <h1 className="main-title" style={{fontSize:'30px',textIndent:'1em'}}><a href="../"> LocalhosT SpoT</a></h1>
      </div>
    </div>

     
  );
}