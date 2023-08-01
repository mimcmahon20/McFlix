import React from "react";
import "../styles/Home.css";

import Header from "../components/Header";
import MyListRow from "../components/MyListRow";
import ComedyRow from "../components/ComedyRow";
import NewPopularRow from "../components/NewPopularRow";
import ActionRow from "../components/ActionRow";
import TVShowRow from "../components/TVShowRow";


export default function Home() {
  return (<div className="homepage">
    <Header />
    {/* <MyListRow id="mylist"/> */}
    <ComedyRow id="comedy"/>
    {/* <NewPopularRow id="new" />
    <ActionRow id="action" />
    <TVShowRow id="tv"/> */}
    
    
    
    

  </div>);
}
