import React from "react";
import "../styles/Movie.css";
import infosvg from "../assets/info.svg";
import playsvg from "../assets/play.svg";
import thumbsvg from "../assets/thumb.svg";

export default function Movie(props) {
  const {movie} = props;

return (<div className="movie-container-padded">
    <div className="movie-container">
      <div className="movie-poster">
        <img src={movie.src} alt="movie poster"></img>
        <div className="movie-description">
          <div className="description-content">
            <div className="movie-buttons">
              <div className="play-button movie-button"><img className="video-svg" src={playsvg} alt="" /></div>
              <div className="like-button movie-button"><img className="thumb-svg" src={thumbsvg} alt="" /></div>
              <div className="add-button movie-button">+</div>
            </div>
            <div className="movie-info-description">
              <div className="percent-match">97% match</div>
              <div className="age">TV-MA</div>
              <div className="movie-length">1h 52m</div>
            </div>
            <div className="movie-genre">Witty<span className="genre-divider">.</span>Comedy<span className="genre-divider">.</span>Action</div>
            <div className="movie-info">
          <button href="/" className="movie-info-link">
            <img className="info-svg" src={infosvg} alt="" />
            <h4>More Info</h4>
          </button>
          </div>
          
          </div>
          
          
        </div>
        </div>
      </div>
  </div>);
}
