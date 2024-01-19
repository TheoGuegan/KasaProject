import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <div className="about">
      <Navigation />
      <Banner className="carroussel-page2" />
      <div className="about-container">
        <ul>
          <Collapse
            name="Fiabilité"
            description="Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes"
          />
          <Collapse
            name="Respect"
            description="La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            name="Service"
            description="La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            name="Sécurité"
            description="La sécurité est la prioriété de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectées. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes."
          />
        </ul>
      </div>
      <Footer />
    </div>
  );
};
export default About;
