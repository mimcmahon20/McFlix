import React from "react";

import MovieRow from "./MovieRow";

import SuitsCover from "../assets/SuitsCover.png";
import WitcherCover from "../assets/WitcherCover.png";
import SeinfeldCover from "../assets/SeinfeldCover.png";
import CultCover from "../assets/CultCover.png";
import CommunityCover from "../assets/CommunityCover.png";
import ArrestedCover from "../assets/ArrestedCover.png";
import GoWithItCover from "../assets/GoWithItCover.png";
import CaptainFallCover from "../assets/CaptainFallCover.png";
import TooHotCover from "../assets/TooHotCover.png";
import SoupCover from "../assets/SoupCover.png";
import TrailerParkCover from "../assets/TrailerParkCover.png";
import UntoldCover from "../assets/UntoldCover.png";
import GoodPlaceCover from "../assets/GoodPlaceCover.png";
import MusclesCover from "../assets/MusclesCover.png";
import LivingWithYourselfCover from "../assets/LivingWithYourselfCover.png";
import BakiHanmaCover from "../assets/BakiHanmaCover.png";
import KeyPeeleCover from "../assets/KeyPeeleCover.png";
import StrangerThingsCover from "../assets/StrangerThingsCover.png";
import ChimpEmpireCover from "../assets/ChimpEmpireCover.png";
import OurUniverseCover from "../assets/OurUniverseCover.png";
import BetterCallSaulCover from "../assets/BetterCallSaulCover.png";
import ShamelessCover from "../assets/ShamelessCover.png";

export default function NewPopularRow() {

  const movies = [
    {
        title: "Suits",
        src: SuitsCover,
    },
    {
        title: "Witcher",
        src: WitcherCover,
    },
    {
        title: "Seinfeld",
        src: SeinfeldCover,
    },
    {
        title: "Cult",
        src: CultCover,
    },
    {
        title: "Community",
        src: CommunityCover,
    },
    {
        title: "Arrested",
        src: ArrestedCover,
    },
    {
        title: "GoWithIt",
        src: GoWithItCover,
    },
    {
        title: "CaptainFall",
        src: CaptainFallCover,
    },
    {
        title: "TooHot",
        src: TooHotCover,
    },
    {
        title: "Soup",
        src: SoupCover,
    },
    {
        title: "TrailerPark",
        src: TrailerParkCover,
    },
    {
        title: "Untold",
        src: UntoldCover,
    },
    {
        title: "GoodPlace",
        src: GoodPlaceCover,
    },
    {
        title: "Muscles",
        src: MusclesCover,
    },
    {
        title: "LivingWithYourself",
        src: LivingWithYourselfCover,
    },
    {
        title: "BakiHanma",
        src: BakiHanmaCover,
    },
    {
        title: "KeyPeele",
        src: KeyPeeleCover,
    },
    {
        title: "StrangerThings",
        src: StrangerThingsCover,
    },
    {
        title: "ChimpEmpire",
        src: ChimpEmpireCover,
    },
    {
        title: "BetterCallSaul",
        src: BetterCallSaulCover,
    },
    {
        title: "Shameless",
        src: ShamelessCover,
    },
    {
        title: "OurUniverse",
        src: OurUniverseCover,
    },
];


  return (<div>
    <MovieRow 
      title="New & Popular"
      movies={movies}
    />
  </div>);
}
