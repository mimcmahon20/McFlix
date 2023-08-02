import React from "react";

import MovieRow from "./MovieRow";
import JackassCover from "../assets/JackassCover.png";
import PussCover from "../assets/PussCover.png";
import LookUpCover from "../assets/LookUpCover.png";
import KickassCover from "../assets/KickassCover.png";
import ZombielandCover from "../assets/ZombielandCover.png";
import ArmyThievesCover from "../assets/ArmyThievesCover.png";
import GameOverCover from "../assets/GameOverCover.png";
import NiceGuysCover from "../assets/NiceGuysCover.png";
import WitcherCover from "../assets/WitcherCover.png";
import GoWithItCover from "../assets/GoWithItCover.png";
import StrangerThingsCover from "../assets/StrangerThingsCover.png";

export default function ActionRow() {
  const movies = [
    {
      title: "Jackass",
      src: JackassCover,
    },
    {
      title: "Puss",
      src: PussCover,
    },
    {
      title: "LookUp",
      src: LookUpCover,
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
      title: "ArmyThieves",
      src: ArmyThievesCover,
    },
    {
      title: "GameOver",
      src: GameOverCover,
    },
    {
      title: "NiceGuys",
      src: NiceGuysCover,
    },
    {
      title: "Witcher",
      src: WitcherCover,
    },
    {
      title: "GoWithIt",
      src: GoWithItCover,
    },
    {
      title: "StrangerThings",
      src: StrangerThingsCover,
    },
  ];

  return (
    <div>
      <MovieRow title="Action" movies={movies} />
    </div>
  );
}
