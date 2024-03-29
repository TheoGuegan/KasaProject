import React from "react";
import Navigation from "../components/Navigation";
import Cards from "../components/Cards";
import dataBase from "../assets/db.json";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Accueil = () => {
  return (
    <div className="accueil">
      <Navigation />
      <Banner className="carroussel-page1" />
      <div className="cards-container">
        {dataBase.map((logement) => (
          <NavLink
            to={{
              pathname: `/logement/${logement.id}`,
              state: { logement: logement },
            }}
            key={logement.id}
          >
            <Cards key={logement.id} logement={logement} className="card" />
          </NavLink>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Accueil;
