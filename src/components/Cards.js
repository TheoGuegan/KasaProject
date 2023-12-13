import React from "react";

const Cards = (props) => {
  const logement = props.logement;

  return (
    <div className="card">
      <img src={logement.pictures[0]} alt="" className="img-card" />
      <h1>{logement.title}</h1>
    </div>
  );
};

export default Cards;
