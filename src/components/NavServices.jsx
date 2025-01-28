import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./NavServices.css";
import menu from "../assets/hamburger.png";
import user from "../assets/user.jpg"
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
            }

    return(
        <>
        <div className="NavContainer">
               <div className="logo">
                 <h2 className="logoText">KEEV</h2>
               </div>
               <div className="menu">
                   <img src={menu} alt="" onClick={showNavs} id="menuIcon"/>
               </div>
               <div className="nav-Links" >
                 <ul>
                   <li id="HomeTxt">Buy</li>
                   <li>Dashboard</li>
                   <li>Find Realtors</li>
                   <li>Lease</li>
                   <li>Saved Houses</li>
                   <li>Just Sold</li>
                   <li><img src={user} alt="" id="user" /></li>
                 </ul>
               </div>
             </div>
        </>
    );
};

export default NavServices