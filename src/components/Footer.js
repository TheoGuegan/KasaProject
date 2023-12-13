import React from "react";
import LogoKasaBlack from "../assets/logo-kasa-black.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={LogoKasaBlack} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
