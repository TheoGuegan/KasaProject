import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Carroussel from "../components/Carroussel";
import Chevron from "../assets/chevron.png";

const About = () => {
  const [isFiabiliteVisible, setIsFiabiliteVisible] = useState(false);
  const [isRespectVisible, setIsRespectVisible] = useState(false);
  const [isServiceVisible, setIsServiceVisible] = useState(false);
  const [isSecuriteVisible, setIsSecuriteVisible] = useState(false);

  const toggleFiabiliteVisibility = () => {
    setIsFiabiliteVisible((prevValue) => !prevValue);
  };
  const toggleRespectVisibility = () => {
    setIsRespectVisible((prevValue) => !prevValue);
  };
  const toggleServiceVisibility = () => {
    setIsServiceVisible((prevValue) => !prevValue);
  };
  const toggleSecuriteVisibility = () => {
    setIsSecuriteVisible((prevValue) => !prevValue);
  };

  return (
    <div className="about">
      <Navigation />
      <Carroussel />
      <div className="about-container">
        <ul>
          <div className="collapse-div">
            <div className="collapse-title">
              <li className="collapse-name">Fiabilité</li>
              <p className="chevron-container">
                <img
                  className={`collapse-chevron ${
                    isFiabiliteVisible ? "reverse-rotate" : ""
                  }`}
                  src={Chevron}
                  alt=""
                  onClick={toggleFiabiliteVisibility}
                />
              </p>
            </div>
            <div
              className={`collapse-content ${
                isFiabiliteVisible ? "collapse-content-visible" : ""
              }`}
            >
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes
              </p>
            </div>
          </div>

          <div className="collapse-div">
            <div className="collapse-title">
              <li className="collapse-name">Respect</li>
              <p className="chevron-container">
                <img
                  className={`collapse-chevron ${
                    isRespectVisible ? "reverse-rotate" : ""
                  }`}
                  src={Chevron}
                  alt=""
                  onClick={toggleRespectVisibility}
                />
              </p>
            </div>
            <div
              className={`collapse-content ${
                isRespectVisible ? "collapse-content-visible" : ""
              }`}
            >
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </div>
          </div>

          <div className="collapse-div">
            <div className="collapse-title">
              <li className="collapse-name">Service</li>
              <p className="chevron-container">
                <img
                  className={`collapse-chevron ${
                    isServiceVisible ? "reverse-rotate" : ""
                  }`}
                  src={Chevron}
                  alt=""
                  onClick={toggleServiceVisibility}
                />
              </p>
            </div>
            <div
              className={`collapse-content ${
                isServiceVisible ? "collapse-content-visible" : ""
              }`}
            >
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </div>
          </div>

          <div className="collapse-div">
            <div className="collapse-title">
              <li className="collapse-name">Sécurité</li>
              <p className="chevron-container">
                <img
                  className={`collapse-chevron ${
                    isSecuriteVisible ? "reverse-rotate" : ""
                  }`}
                  src={Chevron}
                  alt=""
                  onClick={toggleSecuriteVisibility}
                />
              </p>
            </div>
            <div
              className={`collapse-content ${
                isSecuriteVisible ? "collapse-content-visible" : ""
              }`}
            >
              <p>
                La sécurité est la prioriété de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectées. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            </div>
          </div>
        </ul>
      </div>
      <Footer />
    </div>
  );
};
export default About;
