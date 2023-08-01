import React from "react";
import "../styles/Home.css";

import Header from "../components/Header";
import MovieRow from "../components/MovieRow";

export default function Home() {
  return (<div className="homepage">
    <Header />
    <MovieRow />
    <MovieRow />
    <MovieRow />

  </div>);
}
