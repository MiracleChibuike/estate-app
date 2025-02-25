
import React, {useEffect, useRef} from "react";
import { useState } from "react";
import "./Nav.css";
import menu from "../assets/hamburger.png";
import { useNavigate } from "react-router-dom";
import { Links } from "react-router-dom";
import { Link } from "react-router-dom";


const Nav = () => {
  let menuIcon = null;
  let navsItem = null;

  useEffect(() => {
    menuIcon = document.getElementById("menuIcon");
    navsItem = document.querySelector(".nav-Links");
  }, []);

  const showNavs = () => {
    // console.log(menuIcon, navsItem)
    navsItem.classList.toggle("show");
    navsItem.classList.add("rushnav");
    let una = document.getElementById("hello");
  };

  let homeText = null;

  useEffect(() => {
    homeText = document.getElementById("HomeTxt");
    console.log(homeText);
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
  };

  // Add shadow to the NavContainer via useRef on Scroll
     const navContainerRef2 = useRef(null);
            console.log(navContainerRef2)
  
             useEffect(() => {
               const handleScroll = () => {
                 if (navContainerRef2.current) {
                   // Ensure the ref is not null
                   if (window.scrollY > 0) {
                     navContainerRef2.current.classList.add("addshadow");
                   } else {
                     navContainerRef2.current.classList.remove("addshadow");
                   }
                 }
               };
  
               window.addEventListener("scroll", handleScroll);
  
               return () => {
                 window.removeEventListener("scroll", handleScroll); // Cleanup listener
               };
             }, []);

  return (
    // Nav-Container
    <div className="NavContainer" ref={navContainerRef2}>
      <div className="logo">
        <Link to="/">
          <h2 className="logoText">KEEV</h2>
        </Link>
      </div>
      <div className="menu">
        <img src={menu} alt="" id="menuIcon" onClick={showNavs} />
      </div>
      <div className="nav-Links">
        <ul>
          <Link to="/">
            <li id="HomeTxt">Home</li>
          </Link>
          <Link to="/Services">
            <li>Services</li>
          </Link>
          <li>About Us</li>
          <li>Blogs</li>
          <li>Agents</li>
          <Link to="/Contact">
            <li>Contact Us</li>
          </Link>
          <li id="LogIn">Log In</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav