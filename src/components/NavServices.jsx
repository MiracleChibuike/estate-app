import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./NavServices.css";
import menu from "../assets/hamburger.png";
import user from "../assets/user.jpg";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/folder/favicon.png";
const NavServices = () => {

  //Show and Hide Nav Menu
  const navContainerRef = useRef(null);
  const navItems = useRef(null)
  const navBarIcon = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(false);
 
  const openNav = () => {
    setIsNavVisible(prev => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navBarIcon.current &&
        !navBarIcon.current.contains(event.target) &&
        navItems.current &&
        !navItems.current.contains(event.target)
      ) {
        setIsNavVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
   })
      
            // Add shadow to the NavContainer via useRef on Scroll
          // console.log(navContainerRef)

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
          }, []);

          const userDashBoard = useRef(null);

    return (
      <>
        <div className="NavContainer" ref={navContainerRef}>
          <div className="logo">
            <Link to="/">
            <img src={logo} width={'45px'} alt="" />
              {/* <h2 className="logoText">KEEV</h2> */}
            </Link>
          </div>
          <div className="menu">
            <img src={menu} ref={navBarIcon} onClick={openNav} alt="" id="menuIcon" />
          </div>
          <div className={`nav-Links ${isNavVisible ? "visible" : "hidden"}`} ref={navItems}>
            <ul>
              <li id="HomeTxt">Buy</li>
              <Link to={"/Dashboard"}>
                <li ref={userDashBoard}>Dashboard</li>
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