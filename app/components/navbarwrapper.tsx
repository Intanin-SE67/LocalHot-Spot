"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Category from "./Category";

export default function NavbarWrapper() {
  const [showModel, setShowModel] = useState(false);
  
  const handleShowModel = () => {
    setShowModel(!showModel);
  };

  return (
    <>
      <Navbar handleShowModel={handleShowModel} />
      {showModel && <Category handleShowModel={handleShowModel} />}
    </>
  );
}