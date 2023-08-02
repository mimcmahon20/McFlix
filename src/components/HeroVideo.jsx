import React from "react";
import "../styles/HeroVideo.css";
import batmanlogo from "../assets/batmanlogo.png";
import playsvg from "../assets/play.svg";
import infosvg from "../assets/info.svg";

export default function HeroVideo() {
  return (
    <div className="hero-section">
      <div className="video-info">
        <div className="video-title-container">
          <img
            src={batmanlogo}
            alt="Batman: The Dark Knight"
            className="video-title"
          />
        </div>
        <div className="video-buttons">
          <button className="play">
            <img className="video-svg" src={playsvg} alt="" />
            Play</button>
          <button className="more-info"><img className="info-svg" src={infosvg} alt="" />More Info</button>
        </div>
      </div>
      <video className="batman" autoPlay muted loop loading="lazy">
        <source src="/Videos/BatmanVideo.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}
