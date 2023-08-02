import React from "react";

import MovieRow from "./MovieRow";
import StrangerThingsCover from "../assets/StrangerThingsCover.png";
import GoWithItCover from "../assets/GoWithItCover.png";
import TooHotCover from "../assets/TooHotCover.png";
import GoodPlaceCover from "../assets/GoodPlaceCover.png";
import MusclesCover from "../assets/MusclesCover.png";
import OurUniverseCover from "../assets/OurUniverseCover.png";
import ShamelessCover from "../assets/ShamelessCover.png";
import KeyPeeleCover from "../assets/KeyPeeleCover.png";
import WentworthCover from "../assets/WentworthCover.png";
import LupinCover from "../assets/LupinCover.png";
import ClickbaitCover from "../assets/ClickbaitCover.png";
import PeakyBlindersCover from "../assets/PeakyBlindersCover.png";

export default function MyListRow() {
  const movies = [
    {
      title: "StrangerThings",
      src: StrangerThingsCover,
    },
    {
      title: "GoWithIt",
      src: GoWithItCover,
    },
    {
      title: "TooHot",
      src: TooHotCover,
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
      title: "OurUniverse",
      src: OurUniverseCover,
    },
    {
      title: "Shameless",
      src: ShamelessCover,
    },
    {
      title: "KeyPeele",
      src: KeyPeeleCover,
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

  return (
    <div>
      <MovieRow title="My List" movies={movies} />
    </div>
  );
}
