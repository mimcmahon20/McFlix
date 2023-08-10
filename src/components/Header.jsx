import React, { useEffect } from "react";
import "../styles/Header.css";

import searchSvg from "../assets/search.svg";
import bellSvg from "../assets/bell.svg";
import profileImg from "../assets/profileImg.png";
import caretSvg from "../assets/caret.svg";

export default function Header() {

  //i will make the background of header class transition from translucent to #0a0a0a when the user scrolls down half the height

  useEffect(() => {
    const header = document.querySelector(".header");
    const scrollHeight = window.innerHeight / 2;

    window.addEventListener("scroll", () => {
      if (window.scrollY > scrollHeight) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    });
  }, []);


  return (
    <div>
      <header className="header">
        <div className="header-left">
          <h1 className="mcflix">McFlix</h1>
          <div className="nav">
            <ul>
              <li>
                <a className="home" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/">TV Shows</a>
              </li>
              <li>
                <a href="/">Movies</a>
              </li>
              <li>
                <a href="/">New & Popular</a>
              </li>
              <li>
                <a href="/">My List</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="header-right">
          <div className="right-element">
            <div className="searchSvg">
              <img src={searchSvg} alt="search" />
            </div>
          </div>

          <div className="right-element">
            <div className="bellSvg">
              <img src={bellSvg} alt="bell" />
            </div>
          </div>

          <div className="profile">
            <div className="profileImg">
              <img src={profileImg} alt="profile"/>
            </div>
            <div className="caret">
              <img src={caretSvg} alt="caret"></img>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
