import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <Navigation />
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="link">
        <p>Retourner sur la page d'accueil</p>
      </NavLink>
      <Footer />
    </div>
  );
};

export default Error;
