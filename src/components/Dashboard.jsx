import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import backlink from "../assets/backlink.svg";
import "./Dashboard.css";

const Dashboard = () => {
  const navigateBack = useNavigate();
  const backLinkNav = () => {
    navigateBack("/Services");
  };
  //   Navigate To Profile page
  const profileNavigate = useNavigate();

  const loadProfile = () => {
    profileNavigate("/Profile");
  };
  const profileTxt = useRef(null);
  useEffect(() => {
    profileTxt.current.addEventListener("click", () => {
        loadProfile();
    });
  }, []);

  return (
    <>
      <div className="container_Dashboard">
        <div className="icon_Back">
          <img src={backlink} id="backLink" onClick={backLinkNav} alt="" />
        </div>
        <div className="pageHead">
          <h2>General Information</h2>
        </div>
        {/* Buttons for navigation */}
        <div className="buttonsNav">
          <button className="Profile_Tab" ref={profileTxt}>
            Profile Settings
          </button>
          <button>Property Alerts</button>
          <button>Currency Preferences</button>
          <button>Language Options</button>
          <button>Terms And Conditions</button>
          <button>Help</button>
          <button>Location Preferences</button>
          <button>Log Out</button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
