import Navbar from "../navbar";

export default function HistoryPage() {
  return (
    <div>
    <Navbar />
        <div className="container">
            <div style={{marginLeft: '75px'}}>
                <h1 style={{ fontSize: '35px', fontWeight: 'bold', paddingBottom: '20px'}}>User Profile</h1>
                <div>
                  <h1 style={{paddingBottom: '10px'}}>Email</h1>
                    <input type="Email" placeholder="Jonhdoe@placeholder.com" className="input-text" style={{minWidth: 'fill'}}></input>
                    <button  className="button-comfirm" style={{float: 'right'}}>Verify Email</button>
                </div>
                <div>
                  <h1 style={{paddingBottom: '10px', margin: 'auto'}}>Name</h1>
                  <input type="text" placeholder="Your name here" className="input-text" style={{minWidth: '750px'}}></input><br />
                  <button  className="button-comfirm" style={{float: 'right'}}>Save Username</button>
                </div><br /><br /><br />

                <div>
                  <h1 style={{paddingBottom: '10px', margin: 'auto'}}>Change password</h1>
                  <input type="text" placeholder="New password here" className="input-text" style={{width: '750px'}}></input><br />
                  <button  className="button-comfirm" style={{float: 'right'}}>Save Password</button>
                </div><br /><br /><br />


            </div>

            <div style={{margin: 'auto'}}>
              <h1 style={{paddingBottom: '10px'}}>Profile image</h1>
              <img src="../../images/image-type.png" className="img-input" style={{ width: 400,height: 'auto', margin: '0px auto'}}></img>
            </div>
            
        </div>

    </div>
  );
}