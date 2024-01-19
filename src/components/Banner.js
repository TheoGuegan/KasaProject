import React from "react";

const Carroussel = (props) => {
  const bannerClassName = props.className;

  return (
    <div className={bannerClassName}>
      <div className="overlay">
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
};

export default Carroussel;
