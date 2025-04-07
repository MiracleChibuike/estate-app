import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./NavServices.css";
import menu from "../assets/hamburger.png";
import user from "../assets/user.jpg";
import { useNavigate, Link } from "react-router-dom";
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
      

          // Function to display the selected image of a user in the nav-bar
          const imageBannerNav = useRef(null)
          useEffect(() => {
            const userImageStored = localStorage.getItem("userProfile");
            if (userImageStored) {
              imageBannerNav.current.src = userImageStored
            }
          }, [])

    return (
      <>
        <div className="NavContainer" ref={navContainerRef}>
          <div className="logo">
            <Link to="/">
              <h2 className="logoText">KEEV</h2>
            </Link>
          </div>
          <div className="menu">
            <img src={menu} alt="" onClick={showNavs} id="menuIcon" />
          </div>
          <div className="nav-Links">
            <ul>
              <li id="HomeTxt">Buy</li>
              <Link to="/Dashboard">
                <li>Dashboard</li>
              </Link>
              <li>Find Realtors</li>
              <li>Lease</li>
              <li>Saved Houses</li>
              <li>Just Sold</li>
              <li>
                <Link to="/EditProfile">
                  <img
                    src="https://i.pinimg.com/736x/49/17/c9/4917c92ac5f017b1d26e324d53cac668.jpg"
                    alt=""
                    id="user"
                    ref={imageBannerNav}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
};

export default NavServices