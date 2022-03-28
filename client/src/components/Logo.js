import React from "react";
import logo from "../img/logo.png";

const Logo = () => {
  return (
    <>
      <div className="m-6 justify-center text-center">
        <img className="h-48 m-auto" src={logo} alt="Logo" />
        <h1 className="text-5xl font-black">Beez It!</h1>
      </div>
    </>
  );
};

export default Logo;
