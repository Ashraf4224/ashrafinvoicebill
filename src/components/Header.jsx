import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="container bg-purple-400 mx-auto flex justify-between">
      <div className="flex items-center ">
        <img src={logo} alt="" className="w-20 h-20" />
        <h1 className="text-rose-500 font-serif font-extrabold text-4xl">
          Ashraf
        </h1>
      </div>
      <ul className="hidden md:block text-xs font-semibold pr-4 py-1">
        <li>GST : GST12456</li>
        <li>Room No : 786</li>
        <li>ASf-Complex</li>
        <li>mobile : 0123456789</li>
        <li>website : ashrafblog.com</li>
      </ul>
    </div>
  );
}

export default Header;
