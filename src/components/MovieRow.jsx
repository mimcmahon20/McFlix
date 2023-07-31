import React from "react";
import "../styles/MovieRow.css";

import Movie from "./Movie";

export default function MovieRow() {

    // let movies = [{
    //     id: 0,
    //     name: "Avengers: Infinity War",
    //     overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos.",
    //     release_date: "2018-04-25",
    //     poster_path: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
    // },
    // {
    //     id: 1,
    //     name: "The Avengers",
    //     overview: "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster.",
    //     release_date: "2012-04-25",
    //     poster_path: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/cezWGskPY5x7GaglTTRN4Fugfb8.jpg"
    // }];
  return (<div className="slider">
    <Movie />
    <Movie />
  </div>);
}
