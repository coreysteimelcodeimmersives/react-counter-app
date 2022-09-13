import React from "react";

const ShowStars = ({ count }) => {
  const showStarsSpan = (count) => {
    const stars = [];
    for (let index = 0; index < count; index++) {
      {
        stars.push(
          <span key={index} className="fa fa-star checked fa-lg"></span>
        );
      }
    }
    return stars;
  };
  return <>{showStarsSpan(count)}</>;
};

export default ShowStars;
