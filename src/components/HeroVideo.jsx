import React from "react";
import "../styles/HeroVideo.css";

export default function HeroVideo() {
  return (
    <div className="hero-section">
      <video className="batman" autoPlay muted loop loading="lazy">
        <source src="/Videos/BatmanVideo.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}
