import React, { useEffect } from "react";
import "../styles/MovieRow.css";
import arrow from "../assets/arrow.svg";

import Movie from "./Movie";

import gsap from "gsap";

export default function MovieRow() {
  let tlSliderRight = gsap.timeline({ paused: true });
  let tlSliderLeft = gsap.timeline({ paused: true });

  tlSliderRight.to(".slider", {
    duration: 1,
    x: -10,
    stagger: 0.2,
    ease: "ease-in",
  });

  tlSliderLeft.to(".slider", {
    duration: 1,
    x: -1000,
    stagger: 0.2,
    ease: "ease-in",
  });

  let handleRight = () => {
    tlSliderRight.play();
  };

  let handleLeft = () => {
    tlSliderLeft.play();
    console.log("left");
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className="row">
      <h2 className="row-title">My List</h2>
      <div className="slider">
        <a >
          <div className="arrow arrow-left" onClick={handleLeft()}>
            <img className="left" src={arrow} alt="arrow"></img>
          </div>
        </a>
        <a>
          <div className="arrow arrow-right">
            <img className="right" src={arrow} alt="arrow"></img>
          </div>
        </a>

        <div className="padded-container">
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
      </div>
    </div>
  );
}
