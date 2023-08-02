import React from "react";
import "../styles/Home.css";

import Header from "../components/Header";
import HeroVideo from "../components/HeroVideo";
import MyListRow from "../components/MyListRow";
import ComedyRow from "../components/ComedyRow";
import NewPopularRow from "../components/NewPopularRow";
import ActionRow from "../components/ActionRow";
import TVShowRow from "../components/TVShowRow";


export default function Home() {
  return (<div className="homepage">
    <div className="video-space">
    <Header />
    <HeroVideo />
    </div>
    {/* <MyListRow id="mylist"/> */}
    <ComedyRow id="comedy"/>
    <NewPopularRow id="new" />
    {/* <ActionRow id="action" /> */}
    <TVShowRow id="tv"/>
    
    
    
    

  </div>);
}
