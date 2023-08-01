import React from "react";

import MovieRow from "./MovieRow";

import BridesmaidCover from "../assets/BridesmaidCover.png";
import FutileCover from "../assets/FutileCover.png";
import HappyCover from "../assets/HappyCover.png";
import OutlawCover from "../assets/OutlawCover.png";
import AcceptedCover from "../assets/AcceptedCover.png";



export default function ComedyRow() {

    const movies = [
        {
            title: "Bridesmaids",
            src: BridesmaidCover,
        },
        {
            title: "Futile",
            src: FutileCover,
        },
        {
            title: "Happy",
            src: HappyCover,
        },
        {
            title: "Outlaw",
            src: OutlawCover,
        },
        {
            title: "Accepted",
            src: AcceptedCover,
        },
    ]

  return (<div>
    <MovieRow 
      title="Comedy"
      movies={movies}
    />
  </div>);
}
