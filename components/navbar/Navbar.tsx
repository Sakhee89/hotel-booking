import React from "react";
import Header from "../ui/Header";

const Navbar = () => {
  return (
    <nav>
      <div className="sticky top-0 bg-blue-500 px-5 py-5 flex justify-between items-center">
        <h1>Hotel App</h1>
        <Header />
      </div>
    </nav>
  );
};

export default Navbar;
