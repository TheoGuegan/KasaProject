import React, { useNavigate, useEffect } from "react";
import Navigation from "../components/Navigation";
import dataBase from "../assets/db.json";
import Rating from "../components/Rating";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Error from "../pages/Error";

const Logement = () => {
  const data = dataBase;

  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const urlId = url.pathname.split("/").pop();

  const logementDetails = data.find((item) => item.id === urlId);

  // let navigate = useNavigate();
  // useEffect(() => {
  //   if (logementDetails === undefined) {
  //     navigate(Error, { replace: true });
  //   }
  // }, [urlId, logementDetails, navigate]);

  return (
    <div className="logement">
      <Navigation />
      <Carrousel logementDetails={logementDetails} />

      <div className="info-logement-container">
        <div className="left-part-info">
          <h2>{logementDetails.title}</h2>
          <p>{logementDetails.location}</p>
          <ul>
            {logementDetails.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="right-part-info">
          <div className="host-detail">
            <p>{logementDetails.host.name}</p>
            <img src={logementDetails.host.picture} alt="" />
          </div>
          <Rating logementDetails={logementDetails} />
        </div>
      </div>

      <div className="collapse-container">
        <Collapse
          name="Description"
          description={logementDetails.description}
        />
        <Collapse
          name="Equipements"
          description={
            <ul>
              {logementDetails.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
        {/* <div
          className={`collapse-div ${
            isSpanDescriptionVisible ? "span-visible" : ""
          }`}
        > */}
        {/* <div className="collapse-title">
            <p className="collapse-name">Description</p>
            <p className="chevron-container">
              <img
                className={`collapse-chevron ${
                  isSpanDescriptionVisible ? "reverse-rotate" : ""
                }`}
                src={Chevron}
                alt=""
                onClick={toggleSpanDescriptionVisibility}
              />
            </p>
          </div>
          <div
            className={`collapse-content ${
              isSpanDescriptionVisible ? "collapse-content-visible" : ""
            }`}
          >
            <p>{logementDetails.description}</p>
          </div> */}
        {/* </div> */}
        {/* <div className="collapse-div">
          <div className="collapse-title">
            <p className="collapse-name">Equipements</p>
            <p className="chevron-container">
              <img
                className={`collapse-chevron ${
                  isSpanEquipmentVisible ? "reverse-rotate" : ""
                }`}
                src={Chevron}
                alt=""
                onClick={toggleSpanEquipmentVisibility}
              />
            </p>
          </div>
          <div
            className={`collapse-content ${
              isSpanEquipmentVisible ? "collapse-content-visible" : ""
            }`}
          >
            <ul>
              {logementDetails.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
