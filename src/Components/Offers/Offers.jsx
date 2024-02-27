import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>eat 🍴</h1>
        <h1>sleep 😴</h1>
        <h1>style 👟</h1>
        <h1>repeat 🔁</h1>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;