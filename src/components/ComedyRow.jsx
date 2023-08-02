import React from "react";

import MovieRow from "./MovieRow";

import "../styles/MovieRow.css"

import BridesmaidCover from "../assets/BridesmaidCover.png";
import FutileCover from "../assets/FutileCover.png";
import HappyCover from "../assets/HappyCover.png";
import OutlawsCover from "../assets/OutlawsCover.png";
import AcceptedCover from "../assets/AcceptedCover.png";
import BruceCover from "../assets/BruceCover.png";
import JackassCover from "../assets/JackassCover.png";
import PussCover from "../assets/PussCover.png";
import TedCover from "../assets/TedCover.png";
import FernCover from "../assets/FernCover.png";
import CableCover from "../assets/CableCover.png";
import LeaveYouCover from "../assets/LeaveYouCover.png";
import LookUpCover from "../assets/LookUpCover.png";
import BenchCover from "../assets/BenchCover.png";
import KickassCover from "../assets/KickassCover.png";
import ZombielandCover from "../assets/ZombielandCover.png";
import OttoCover from "../assets/OttoCover.png";
import ArmyThievesCover from "../assets/ArmyThievesCover.png";
import WarmBodiesCover from "../assets/WarmBodiesCover.png";
import LiarCover from "../assets/LiarCover.png";
import SurfCover from "../assets/SurfCover.png";
import GameOverCover from "../assets/GameOverCover.png";
import NiceGuysCover from "../assets/NiceGuysCover.png";




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
            title: "Accepted",
            src: AcceptedCover,
        },
        {
            title: "Bruce",
            src: BruceCover,
        },
        {
            title: "Jackass",
            src: JackassCover,
        },
        {
            title: "Outlaws",
            src: OutlawsCover,
        },
        {
            title: "Puss",
            src: PussCover,
        },
        {
            title: "Ted",
            src: TedCover,
        },{
            title: "Fern",
            src: FernCover,
        },
        {
            title: "Cable",
            src: CableCover,
        },
        {
            title: "LeaveYou",
            src: LeaveYouCover,
        },
        {
            title: "LookUp",
            src: LookUpCover,
        },
        {
            title: "Bench",
            src: BenchCover,
        },
        {
            title: "Kickass",
            src: KickassCover,
        },
        {
            title: "Zombieland",
            src: ZombielandCover,
        },
        {
            title: "Otto",
            src: OttoCover,
        },
        {
            title: "ArmyThieves",
            src: ArmyThievesCover,
        },
        {
            title: "WarmBodies",
            src: WarmBodiesCover,
        },
        {
            title: "Liar",
            src: LiarCover,
        },
        {
            title: "Surf",
            src: SurfCover,
        },
        {
            title: "GameOver",
            src: GameOverCover,
        },
        {
            title: "NiceGuys",
            src: NiceGuysCover,
        },

    ]

  return (<div>
    <MovieRow 
      title="Comedy"
      movies={movies}
      className="comedy-row"
    />
  </div>);
}
