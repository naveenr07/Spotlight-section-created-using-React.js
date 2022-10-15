import React, { useState } from "react";
import NavBar from "../components/screens/Navbar/NavBar";
import Sidebar from "../components/screens/Sidebar/Sidebar";

function Index() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
    </>
  );
}

export default Index;
