"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {Play, Bookmark, ThumbsUp, CornerDownRight } from "lucide-react";
import type { Choice, Create } from "@/generated/prisma";

type CreateWithUser = Create & {
  user: {
    name: string | null
  }
}

export default function PlayClient({ create }: { create: CreateWithUser }){
  const router = useRouter();
  const handleOpen = () => setIsOpen(true);                                                             //model เลือกรอบ 8 16 
  const handleClose = () => setIsOpen(false);
  const [isOpen, setIsOpen] = useState(false);
  const [round, setRound] = useState<number | null>(null);                                            //กไหนด type เป็น number  โดยค่าเริ่มต้นคือ null
  const [ ranking, setRanking ] = useState<Choice[]>([]);                                               //<Choice[]> กำหนดว่า ranking เป็นArray ของ Choice
  const [ showmore, setShowmore ] = useState(false);                                                  //สำหรับ showmore
  


  useEffect(() => {
    fetch(`/api/ranking/${create.id}`)
      .then(res => res.json())                                                                          //แปลง string JSON เป็น JS Array
      .then(data => {                                                                                   // dataข้อมูลจากAPI นำเข้าไปเก็บใน state(ranking = data)
        setRanking(data);                                                                               //updat state & render component
      })
  },[create.id])                                                                                        //มีเพื่อเช่น ถ้าcreate.idเปลี่ยน = run useEffect ใหม่

  const handleNext = () => {
    if (!round) {
      alert("select Round");
      return;
    }
    const maxround = Math.floor(Math.log2(ranking.length )) - 1                                       //ranking.lengthคำนวนchoice, Math.log2 คือรูท2 ,Math.floor ปัดลง
    if ( round > maxround ) {
      alert(`max select ${2 ** maxround} choices`)
    }
    router.push(`/play/${create.id}/startplay?round=${round}`);
  };



  return(
    <div>
      <div className="container-play">
        {/* ---------------- Left ---------------- */}
        <div className="container-text left-column" style={{gap: '5px'}}>
          <div style={{display: 'flex',gap: '5px', alignItems: 'center'}}>
            <Play size={15}/>
            <p>150+</p>
          </div>
          
          <h1 style={{ fontSize: '35px', fontWeight: 'bold' ,marginBottom: '25px'}}> {create.title}</h1>
          <p>Top subscribe from 28/12/2025</p>
          <div style={{display: 'flex' ,gap:'10px',marginTop: '15px'}}>
            <button className="button-play"><Bookmark size={20}/>Bookmark</button>
            <button className="button-play"><ThumbsUp size={20}/>Like</button>
          </div>

          <div style={{display: 'flex' ,gap:'10px',marginTop: '25px',alignItems: 'center'}}>
            <img src ="#" className="img-card-header" style={{width:'30px',height:'30px'}}/>
            <p style={{fontSize: '20px'}}>By {create.user?.name}</p>
            <p style={{color: '#727670'}}>By {create.user?.name}</p>
          </div>
          <button className="button-create" style={{width:'200px',borderRadius:'20px',margin:'20px'}}>subscribe</button>

          <div style={{paddingTop: '100px'}}>
            <table className="table-play">
              <thead style={{borderBottom:'2px solid #D4D4D4'}}>
                <tr>
                  <td >#</td><td>Media</td><td>Name</td><td >Win Ratio</td><td >Final Win Ratio</td>
                </tr>
              </thead>

              <tbody style={{borderBottom:'2px solid #D4D4D4'}}>
                {(showmore ? ranking : ranking.slice(0,3)).map((choice,index) => {                      // ถ้้าshowmoreเป็นfalse จะให้แสดง .slice(0,3) คือเอาแค่ 3 ตัวแรก
                  const winRatio = choice.playCount === 0                                               //สูตรคำนวนwin ratio
                  ? 0
                  : Math.round((choice.winCount / choice.playCount) * 100);
                  
                  const finalRatio = create.playCount === 0                                             //สูตรคำนวณ final win ratio
                  ? 0
                  : Math.round((choice.finalWin / create.playCount) * 100);

                  return(
                    <tr key={choice.id}>
                      <td>{index+1}</td>
                      <td><img src={choice.image} style={{width:'80px'}}/></td>
                      <td>{choice.name}</td>
                      <td>{winRatio}%</td>
                      <td>{finalRatio}%</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div style={{textAlign:'center', margin:'0px auto' ,paddingTop:'15px'}}>                     
              <button onClick={() => setShowmore(!showmore)} id="showmoreBtn" className="button-create" style={{width:'150px'}}>Show more</button>        {/* เมื่อมีการคลิกเปลี่ยนค่าshowmoreเป็นตรงข้าม */}
            </div>
            
          </div>
        </div> 

        {/* ---------------- Right ---------------- */}
        <div className="container-text right-column" style={{gap: '5px', alignItems:'center'}}>
          <div style={{width:'75%',gap:'30px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <img 
              src={create.coverImage ?? "../"} 
              alt={create.title} 
              className="img-card-play"/>
            <button onClick={handleOpen} className="button-create" style={{maxWidth:'960px',width:'90%',height:'90px'}}>
              <p style={{fontSize:'40px'}}>Play</p>
            </button>
          </div>
          
          <div style={{marginTop:'150px',width:'75%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div style={{display:'flex', marginBottom:'30px', gap:'50px', alignItems:'center',fontSize:'20px',width:'80%'}}>
              <p style={{width:'150px'}}>Nickname</p>
              <input type="text" placeholder="Add Your Nickname" className="input-text" style={{width:'450px'}}></input>
              <p style={{display:'flex',gap:'10px'}}>
                <input type="checkbox" style={{width:'20px',height:'20px'}}></input>
                <span>Anonymous</span>
              </p>
            </div>
            <div style={{display:'flex', marginBottom:'30px', gap:'50px', alignItems:'center',fontSize:'20px',width:'80%'}}>
              <p style={{width:'150px'}}>Your Comments</p>
              <input type="text" placeholder="Add Your Comments" className="input-text" style={{width:'450px'}}></input>
            </div>

            <div style={{textAlign:'right',paddingRight:'10px',width:'80%'}}>
              <button className="button-create" style={{width:'100px', height:'50px'}}>Comment</button>
            </div>
            
          </div>

          <div style={{marginTop:'80px',width:'75%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h2 style={{fontSize:'25px', fontWeight:'bold', marginBottom:'25px'}}>Comments (31)</h2>

            <div style={{ alignItems:'center', gap:'10px',width:'80%'}}>
              <div style={{display:'flex',alignItems:'center',gap:'10px', marginBottom:'15px',justifyContent:'space-between'}}>
                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                   <img src ="#" className="img-card-header" style={{width:'30px',height:'30px'}}/>
                  <p>Anonymous</p>
                  <p>(12day)</p>
                </div>
                <div>
                  <ThumbsUp size={25} />
                </div>
               
              </div>
              <div style={{paddingLeft:'50px'}}>
                <p>Very good</p>
                <p style={{display:'flex',alignItems:'center',gap:'5px', marginTop:'10px'}}>
                  <CornerDownRight size={25}/>
                  <span style={{fontSize:'14px'}}>Reply</span>
                </p>
              </div>
              
              
            </div>
          </div>
          
        </div>
      </div>


        
        {/* ---------------- Modal Play ---------------- */}
      
      {isOpen && (
        <div className="model-play" onClick={handleClose}>
            <div className="model-play-content" onClick={(e) => e.stopPropagation()}>
              <div style={{width:'80%',maxWidth:'900px',display:'flex',justifyContent:'left',marginTop:'10px',marginBottom:'25px'}}>
                <p style={{fontSize:'35px'}}>No. of Choices</p>
              </div>
              
              <select onChange={(e) => setRound(Number(e.target.value))} className="input-text" id="category" style={{backgroundColor:'#595959',width:'80%',maxWidth:'900px', marginBottom:'40px'}} >
                {/* key; id elementในlist , value: คือค่าที่สงจะส่งไปตินuser เลือก ,r * 2 > ranking.length ตย. 4round ต้องมี 8 choice*/}
                {[0,4,8,16,32,64].map((r) => (
                  <option key={r} value={r} disabled= {r * 2 > ranking.length}>                                                                                                                                     
                    {r} Round
                  </option>
                ))}
              </select>
              
              <button onClick={handleNext} className="button-create" style={{maxWidth:'500px',width:'70%',height:'60px', margin:'20px',borderRadius:'20px'}}>
                <p style={{fontSize:'40px'}}>Start</p>
              </button>
            </div>
          </div>
      )}
    </div>
  );
}