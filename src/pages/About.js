import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Carroussel from "../components/Carroussel";

const About = () => {
  return (
    <div>
      <Navigation />
      <Carroussel />
      <ul>
        <li>Fiabilité</li>
        <li>Respect</li>
        <li>Service</li>
        <li>Sécurité</li>
      </ul>
      <Footer />
    </div>
  );
};

export default About;
