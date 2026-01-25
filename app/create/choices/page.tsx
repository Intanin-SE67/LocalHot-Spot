"use client";
import { useRouter } from "next/navigation";
import Navbar from "../../navbar";
import { Weight } from "lucide-react";


export default function ChoicesPage() {
  const router = useRouter();
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
        <span className="span-create">Type</span>
        <div className="line"></div>
        {/* <div className="container-input" style={{padding: '0px auto'}}> */}
          <img src="../../images/image-type.png" className="img-input" style={{ width: 400, margin: '0px auto'}}></img>
          
        {/* </div> */}



         <span className="span-create">Upload Images</span>
        <div className="line"></div>
        {/* <div className="container-input"> */}
          
          <img src="../../images/upload-img.png" className="img-input" style={{margin: '0px auto'}}></img>
        {/* </div> */}


        
         <span className="span-create">Choices</span>
        <div className="line"></div>
        <div>
            <input type="text" placeholder="Search by Name" className="input-text"></input>
            <button  className="button-create" style={{ height: 50}}>search</button>
        </div>

        <div className="container-button-button">
            <button onClick={() => router.push("/create/cover")} className="button-create">&lt;cover</button>
          <button onClick={() => router.push("/create/public-create")} className="button-create">Public&gt;</button>
        </div>
      </div>
    </div>
  );
}