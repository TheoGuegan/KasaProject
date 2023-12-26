import React from "react";

const Carroussel = () => {
  const currentUrl = window.location.href;

  return (
    <div
      className={
        currentUrl === "http://localhost:3000/about"
          ? "carroussel-page2"
          : "carroussel-page1"
      }
    >
      <div className="overlay">
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
};

export default Carroussel;
