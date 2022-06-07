import React from "react";
import logoBlack from "../../Assets/logoBlack.png";
import Large from "./Large";

const NavBar = () => {
  return (
    <div className="border-b flex items-center justify-between px-5 h-[10vh]">
      <img className="h-10" src={logoBlack} alt="" />
      <Large />
    </div>
  );
};

export default NavBar;
