'use client'
import Navbar from "./navbar";
import { prisma } from "@/lib/prisma";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default async function Home() {
  const restaurants = await prisma.restaurant.findMany();
  return (
    <>
      <Navbar />
      <main>
        <div>
          <h1>pop up</h1>
        <Popup trigger={<button className="trigger-button">Click to open popup</button>} position="right center" modal nested>
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> GeeksforGeeks </div>
            <div className="content">
              This is a simple popup example.
            </div>
            <div className="actions">
              <button className="button" onClick={() => {
                console.log('Button clicked');
                close();
              }}>Click here</button>
            </div>
          </div>
        )}
        </Popup>
        </div>
      </main>
    </>
  );
}