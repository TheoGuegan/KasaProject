import React, { useState } from "react";
import VectorG from "../assets/VectorG.png";
import VectorD from "../assets/VectorD.png";

const Carrousel = (props) => {
  const logementDetails = props.logementDetails;
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
    <div className="logement-img">
      <div className="img-container">
        {maxImg > 1 && (
          <div className="btn-container">
            <button
              onClick={() => {
                setPreviousImage();
              }}
              className="btn-left"
            >
              <img src={VectorG} alt="" />
            </button>
            <button
              onClick={() => {
                setNextImage();
              }}
              className="btn-right"
            >
              <img src={VectorD} alt="" />
            </button>
          </div>
        )}
        {maxImg > 1 && (
          <div className="compteur-container">
            <p>
              {compteur + 1}/{maxImg}
            </p>
          </div>
        )}
        <img src={pictures[compteur]} alt="Photographie du logement" />
      </div>
    </div>
  );
};

export default Carrousel;
