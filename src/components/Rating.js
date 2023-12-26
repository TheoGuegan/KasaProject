import React from "react";

const Rating = (props) => {
  const logement = props.logementDetails;

  const generateStars = () => {
    const stars = [];
    const rating = logement.rating || 0;

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className="rating"
          style={{
            color: i <= rating ? "#FF6060" : "gray",
          }}
        >
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return <div>{generateStars()}</div>;
};

export default Rating;
