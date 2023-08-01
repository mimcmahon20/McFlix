import React, { useEffect, useState, useRef } from "react";
import "../styles/MovieRow.css";
import arrow from "../assets/arrow.svg";

import Movie from "./Movie";

import gsap from "gsap";

export default function MovieRow(props) {
  const { title, movies } = props;
  let paddedContainer = useRef(null);
  let [xPosition, setXPosition] = useState(0);
  let numMovies = 13;
  const movieWidth = 308;
  const screenWidth = window.innerWidth;
  const numScreenWidths = Math.ceil(numMovies * movieWidth / screenWidth);

  function handleXPosition(direction) {
    console.log("changing x pos");
    if (direction === "left") {
      slideLeft();
    } else if (direction === "right") {
      slideRight();
    }
  }

  function handleRightArrow() {
    handleXPosition("right");
  }

  function handleLeftArrow() {
    handleXPosition("left");
  }

  //helper gsap functions
  useEffect(() => {
    setXPosition(0);
  }, []);

  const slideRight = () => {
    console.log(xPosition);
    if (paddedContainer === null) return;
    setXPosition(xPosition - movieWidth * 3);
    if (xPosition < -screenWidth * (numScreenWidths - 1.25)) {
      setXPosition(0);
      gsap.to(paddedContainer, {
        duration: 1,
        x: 0,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(paddedContainer, {
        duration: 1,
        x: xPosition - movieWidth * 3,
        ease: "power3.inOut",
      });
    }
  };

  const slideLeft = () => {
    if (paddedContainer === null) return;
    setXPosition(xPosition + movieWidth * 3);
    if(xPosition > -10) {
      setXPosition(0);
    } else {
      gsap.to(paddedContainer, {
      duration: 1,
      x: xPosition + movieWidth * 3,
        ease: "power3.inOut",
      });
    }
  };

  function generateMovies() {
    return movies.map((movie) => {
      return <Movie movie={movie} />;
    });
  }

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="slider">
        <a>
          <div className="arrow arrow-left" onClick={handleLeftArrow}>
            <img className="left" src={arrow} alt="arrow"></img>
          </div>
        </a>
        <a>
          <div className="arrow arrow-right" onClick={handleRightArrow}>
            <img className="right" src={arrow} alt="arrow"></img>
          </div>
        </a>

        <div ref={(el) => (paddedContainer = el)} className="padded-container">
          {generateMovies()}
        </div>
      </div>
    </div>
  );
}
