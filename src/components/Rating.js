import React from "react";

const Rating = (props) => {
  let logement = props.logementDetails;
  return <div>{logement.rating}</div>;
};

export default Rating;
