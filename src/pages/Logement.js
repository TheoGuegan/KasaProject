import React, { useState } from "react";
import Navigation from "../components/Navigation";
import dataBase from "../assets/db.json";
import Rating from "../components/Rating";
import Footer from "../components/Footer";

const Logement = () => {
  const data = dataBase;

  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const urlId = url.pathname.split("/").pop();

  const logementDetails = data.find((item) => item.id === urlId);

  const pictures = logementDetails.pictures;
  const maxImg = logementDetails.pictures.length;

  let [compteur, setCompteur] = useState(0);
  function setPreviousImage() {
    if (compteur <= 0) {
      setCompteur(maxImg - 1);
    } else {
      setCompteur(--compteur);
    }
  }

  function setNextImage() {
    if (compteur === maxImg - 1) {
      setCompteur(0);
    } else {
      setCompteur(++compteur);
    }
  }
  return (
    <div>
      <Navigation />
      <div className="img-container">
        <button
          onClick={() => {
            setPreviousImage();
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setNextImage();
          }}
        >
          +
        </button>
        <img src={pictures[compteur]} alt="" />
      </div>
      <div className="title-logement">
        <h1>{logementDetails.title}</h1>
        <div className="host-detail">
          <h2>{logementDetails.host.name}</h2>
          <img src={logementDetails.host.picture} alt="" />
        </div>
      </div>
      <p>{logementDetails.location}</p>
      <div className="tags-ratings">
        <p>{logementDetails.tags}</p>
        <Rating logementDetails={logementDetails} />
      </div>
      <div className="collapse-container">
        <div className="collapse-div">
          <p>Description</p>
          <span>{logementDetails.description}</span>
        </div>
        <div className="collapse-div">
          <p
            onClick={() => {
              console.log("vous avez cliqué");
            }}
          >
            Equipements
          </p>
          <span>
            <ul>
              {logementDetails.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
