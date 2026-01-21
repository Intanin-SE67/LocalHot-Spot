import Navbar from "../navbar";

export default function CoverPage() {
  return (
    <div>
      <Navbar />
        
      <div className="container-text">
        <h1 style={{ fontSize: '35px', fontWeight: 'bold' }}>Edit Worldcup</h1>
        <div className="menu-sort">
          <span style={{ color: '#BC4126'}}>Cover</span> |
          <span> Choices</span> |
          <span> Public</span>
        </div>
      </div>


      <div className="container-create">
        <div>
          
        </div>
        <span className="span-create">Title</span>
        <div className="line"></div>
        <div className="container-input">
          
          <input type="text" placeholder="Tile" className="input-text"></input>
        </div>



         <span className="span-create">Description</span>
        <div className="line"></div>
        <div className="container-input">
          
          <textarea placeholder="Description" className="input-area"></textarea>
        </div>


        
         <span className="span-create">Cover Image</span>
        <div className="line"></div>
        <div className="container-input">
          <img src="#" className="img-input"></img>
        </div>

        <div className="container-button">
          <button className="button-create">Choices&gt;</button>
        </div>
      </div>
    </div>
  );
}