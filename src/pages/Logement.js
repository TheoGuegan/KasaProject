import React from "react";
import Navigation from "../components/Navigation";
import dataBase from "../assets/db.json";
import Rating from "../components/Rating";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Error from "../pages/Error";
import { useParams } from "react-router-dom";

const Logement = () => {
  const datas = dataBase;

  const { id } = useParams();
  const logementDetails = datas.find((data) => data.id === id);
  if (!logementDetails) {
    return <Error />;
  }

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
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
