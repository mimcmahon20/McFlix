import React from "react";
import "../styles/Movie.css";

export default function Movie(props) {
  const {movie} = props;

return (<div className="movie-container-padded">
    <div className="movie-container">
      <div className="movie-poster">
        <img src={movie.src} alt="movie poster"></img>
        <div className="movie-description">
          <div className="description-content">
            <div className="movie-buttons"></div>
            <div className="movie-info-description"></div>
            <div className="movie-genre"></div>
          </div>
        </div>
        </div>
      </div>
  </div>);
}
