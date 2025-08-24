import React from "react";
import Star from "../assets/img/star.png";
const Ratings = ({ value }) => {
  const stars = Array(value).fill(Star);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} alt="" className="w-[14px] h-[14px]" />
      ))}
    </>
  );
};

export default Ratings;
