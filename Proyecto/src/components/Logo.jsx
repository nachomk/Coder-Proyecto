import React from "react";
import Logo from "../assets/logo.svg";

const LogoWidget = () => {
  return (
    <>
      <div className="flex items-center relative">
        <img src={Logo} alt="Logo" />
      </div>
    </>
  );
};

export default LogoWidget;
