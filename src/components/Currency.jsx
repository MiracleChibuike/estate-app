import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import backlink from "../assets/backlink.svg";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Currency = () => {
    // Navigate to the DashBoard Component
      const backNav = useNavigate();
    
        const navigateBack = () => {
            backNav("/Dashboard");
        };

        // Fetch data
        const [isFlagVisible, setIsFlagVisible] = useState("");

        useEffect(() => {
           const fetchData = async () => {
            try {
                const apiURL = await axios.get(
                  "https://restcountries.com/v3.1/currency/cop"
                );
                const apiData = apiURL.data[0].flags.png;
                const apiName = apiURL.data;
                console.log(apiName);
                apiName.forEach((currency) => {
                    const allCurrency = currency.name;
                    console.log(allCurrency)
                });
                setIsFlagVisible(apiData);
            } catch (error) {
                console.log(error)
            }
           };
           fetchData();
        }, [])
  return (
    <>
      <Helmet>
        <title>Select Your Preferred Currency - KEEV</title>
        <meta name="description" content="Currency page select your currency" />
      </Helmet>
      <div className="container_Dashboard lang-Container">
        <div className="icon_Back">
          <img src={backlink} id="backLink" onClick={navigateBack} alt="" />
        </div>
        <div className="pageHead">
          <h2>Currency Preference</h2>
        </div>
        {/* Currency container */}
        <div className="currencySelect">
          <div className="inputCurrency">
            <input
              type="search"
              id="search-input"
              placeholder="Search your preferred Currency"
              //   ref={inputSearch}
            />
          </div>
          {/* CurrencyLists */}
          <div className="currencyLists">
            <div className="currencyitem"></div>
            {isFlagVisible && (
              <div className="currencyitem">
                <img src={isFlagVisible} alt="" />
                <div className="currencyDesc">
                  <p>
                    <strong style={{ position: "relative", top: "5px" }}>
                      COP
                    </strong>
                  </p>
                  <p style={{ position: "relative", top: "-7px" }}>
                    Colombian Peso
                  </p>
                </div>
              </div>
            )}
            <div className="currencyitem"></div>
            <div className="currencyitem"></div>
            <div className="currencyitem"></div>
            <div className="currencyitem"></div>
            <div className="currencyitem"></div>
            <div className="currencyitem"></div>
            <div className="currencyitem"></div>
            <div className="currencyitem"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;
