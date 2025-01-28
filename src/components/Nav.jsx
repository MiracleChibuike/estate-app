
import React, {useEffect, useRef} from "react";
import { useState } from "react";
import "./Nav.css";
import menu from "../assets/hamburger.png";
import { useNavigate } from "react-router-dom";
import { Links } from "react-router-dom";

const Nav = () => {

    let menuIcon = (null);
    let navsItem = (null);

    useEffect(() => {
        menuIcon = document.getElementById("menuIcon");
        navsItem = document.querySelector(".nav-Links");
    }, [])

    const showNavs = () => {
        // console.log(menuIcon, navsItem)
        navsItem.classList.toggle("show");
        navsItem.classList.add("rushnav");
        let una = document.getElementById("hello");
    }

    let homeText = null;

useEffect( () => {
  homeText = document.getElementById("HomeTxt");
  console.log(homeText)
}, []);

// Add Active Link
const addLink = () => {
   if (homeText) {
     homeText.classList.add("activeLink");
   }
};

document.addEventListener("DOMContentLoaded", addLink);

  const redirectNav = useNavigate();

  const goTonav = () => {
    redirectNav("/Services");
  }

    return (
      // Nav-Container
      <div className="NavContainer">
        <div className="logo">
          <h2 className="logoText">KEEV</h2>
        </div>
        <div className="menu">
          <img src={menu} alt="" id="menuIcon" onClick={showNavs} />
        </div>
        <div className="nav-Links">
          <ul>
            <li id="HomeTxt">Home</li>
            <li onClick={goTonav}>Services</li>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Agents</li>
            <li>Contact Us</li>
            <li id="LogIn">Log In</li>
          </ul>
        </div>
      </div>
    );
};

export default Nav