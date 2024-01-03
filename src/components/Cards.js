import React from "react";

const Cards = (props) => {
  const logement = props.logement;

  return (
    <div className="card">
      <img src={logement.pictures[0]} alt="" />
      <h2>{logement.title}</h2>
    </div>
  );
};

export default Cards;
