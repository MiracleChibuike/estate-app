import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./NavServices.css";
import menu from "../assets/hamburger.png";
import user from "../assets/user.jpg"
import { useNavigate } from "react-router-dom";
const NavServices = () => {

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
            };

            // Add shadow to the NavContainer via useRef on Scroll
          const navContainerRef = useRef(null);
          console.log(navContainerRef)

           useEffect(() => {
             const handleScroll = () => {
               if (navContainerRef.current) {
                 // Ensure the ref is not null
                 if (window.scrollY > 0) {
                   navContainerRef.current.classList.add("addshadow");
                 } else {
                   navContainerRef.current.classList.remove("addshadow");
                 }
               }
             };

             window.addEventListener("scroll", handleScroll);

             return () => {
               window.removeEventListener("scroll", handleScroll); // Cleanup listener
             };
           }, []);

          //  Return back the Home Component on logo Click
          const homeNavigate = useNavigate();

          const returnHome = () => {
            homeNavigate("/");
          }

    return (
      <>
        <div className="NavContainer" ref={navContainerRef}>
          <div className="logo">
            <h2 className="logoText" onClick={returnHome}>
              KEEV
            </h2>
          </div>
          <div className="menu">
            <img src={menu} alt="" onClick={showNavs} id="menuIcon" />
          </div>
          <div className="nav-Links">
            <ul>
              <li id="HomeTxt">Buy</li>
              <li>Dashboard</li>
              <li>Find Realtors</li>
              <li>Lease</li>
              <li>Saved Houses</li>
              <li>Just Sold</li>
              <li>
                <img src={user} alt="" id="user" />
              </li>
            </ul>
          </div>
        </div>
      </>
    );
};

export default NavServices