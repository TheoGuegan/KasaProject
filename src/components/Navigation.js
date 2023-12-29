import React from "react";
import logoKasa from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={logoKasa} alt="logo Kasa" />
      </NavLink>
      <div className="navbar__container">
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about">
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
