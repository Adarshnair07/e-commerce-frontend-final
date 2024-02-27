import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import arrow_icon from "../Assets/arrow.png";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Fresh Out the Box!</h2>
        <div>
        
          <p>Step Up,</p>
          <p> Stand Out</p>
        </div>
        <div className="hero-latest-btn">
          <div>Newest Kicks Here</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
      <Parallax speed={-10}>
        <img src={hero_image} scale={[1,0]} alt="hero" />
        </Parallax>
      </div>
    </div>
  );
};

export default Hero;
