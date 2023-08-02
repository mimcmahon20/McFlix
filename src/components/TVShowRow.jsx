import React from "react";

import MovieRow from "./MovieRow";

import DahmerCover from "../assets/DahmerCover.png";
import DesignatedSurvivorCover from "../assets/DesignatedSurvivorCover.png";
import OzarkCover from "../assets/OzarkCover.png";
import MurderCover from "../assets/MurderCover.png";
import BodyguardCover from "../assets/BodyguardCover.png";
import TrueStoryCover from "../assets/TrueStoryCover.png";
import UnbelievableCover from "../assets/UnbelievableCover.png";
import WentworthCover from "../assets/WentworthCover.png";
import LupinCover from "../assets/LupinCover.png";
import ClickbaitCover from "../assets/ClickbaitCover.png";
import PeakyBlindersCover from "../assets/PeakyBlindersCover.png";

export default function TVShowRow() {

    const movies = [
      {
        title: "Dahmer",
        src: DahmerCover,
    },
    {
        title: "DesignatedSurvivor",
        src: DesignatedSurvivorCover,
    },
    {
        title: "Ozark",
        src: OzarkCover,
    },
    {
        title: "Murder",
        src: MurderCover,
    },
    {
        title: "Bodyguard",
        src: BodyguardCover,
    },
    {
        title: "TrueStory",
        src: TrueStoryCover,
    },
    {
        title: "Unbelievable",
        src: UnbelievableCover,
    },
    {
        title: "Wentworth",
        src: WentworthCover,
    },
    {
        title: "Lupin",
        src: LupinCover,
    },
    {
        title: "Clickbait",
        src: ClickbaitCover,
    },
    {
        title: "PeakyBlinders",
        src: PeakyBlindersCover,
    },
    ];
  return (<div>
    <MovieRow 
      title="TV Shows"
      movies={movies}
    />
  </div>);
}
