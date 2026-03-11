import { getSession } from "@/lib/server";
import { redirect } from "next/navigation";
import ProfileImageUpload from "./ProfileImageSection";


export default async function HistoryPage() {
  const session = await getSession();
    if (!session) {
      redirect("/auth/login");
    }
    console.log("User Data:", session.user);

  return (
    <div>
        <div className="container">
            <div style={{marginLeft: '75px'}}>
                <h1 style={{ fontSize: '35px', fontWeight: 'bold', paddingBottom: '20px'}}>User Profile</h1>
                <div>
                  <h1 style={{paddingBottom: '10px'}}>Email</h1>
                    <input type="email" 
                      defaultValue={session.user.email}
                      className="input-text" 
                      style={{minWidth: 'fill'}}
                      readOnly>
                    </input>
                  <button className="button-comfirm" style={{float: 'right'}}>Verify Email</button>
                </div>
                
                <div>
                  <h1 style={{paddingBottom: '10px', margin: 'auto'}}>Name</h1>
                  <input type="text" 
                    defaultValue={session.user.name}
                    className="input-text" 
                    style={{minWidth: '750px'}} 
                    readOnly>
                  </input><br />
                  <button  className="button-comfirm" style={{float: 'right'}}>Save Username</button>
                </div><br /><br /><br />

                <div>
                  <h1 style={{paddingBottom: '10px', margin: 'auto'}}>Change password</h1>
                  <input type="text" placeholder="New password here" className="input-text" style={{width: '750px'}}></input><br />
                  <button  className="button-comfirm" style={{float: 'right'}}>Save Password</button>
                </div><br /><br /><br />


            </div>
    
            <div style={{margin: 'auto'}}>
              <ProfileImageUpload initialImage={session.user.image || "../../images/image-type.png"} />
            </div>
            
        </div>

    </div>
  );
}