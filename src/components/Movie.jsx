import React from "react";
import "../styles/Movie.css";

import italianJobCover from "../assets/ItalianJobCover.png";

export default function Movie(props) {
  const {movie} = props;

return (<div className="movie-container-padded">
    <div className="movie-container">
      <div className="movie-poster">
        <img src={movie.src} alt="movie poster"></img>
        </div>
      </div>
  </div>);
}
