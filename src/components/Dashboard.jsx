import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import backlink from "../assets/backlink.svg";
import "./Dashboard.css";
import { Helmet } from "react-helmet-async";

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

  // navigate to language Page
  const langNav = useNavigate();

  const navigateToLang = () => {
    langNav("/Langs");
  };

  // Navigate to the Currency Component
  const currencyNav = useNavigate();

  const loadCurrencyComponent = () => {
    currencyNav("/Currency");
  }
  // Navigate to Property Alerts
  const prorpertyNav = useNavigate();
  const loadPropertyAlert = () => {
    prorpertyNav("/Properties");
  }
  return (
    <>
      <Helmet>
        <title>General Information | KEEV</title>
        <meta name="description" content="General Information Page" />
      </Helmet>
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
          <button onClick={loadPropertyAlert}>Property Alerts</button>
          <button onClick={loadCurrencyComponent}>Currency Preferences</button>
          <button onClick={navigateToLang}>Language Options</button>
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
