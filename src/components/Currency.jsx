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

        // Fetch data Colombia Peso
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
        }, []);

        const [isFlagVisible2, setIsFlagVisible2] = useState("");
        // 
        useEffect(() => {
            const dollarCurr = async () => {
                try {
                    const usdCurrency = await axios.get(
                      "https://restcountries.com/v3.1/name/united%20states"
                    );
                    const usdId = usdCurrency.data[0].currencies;
                    const usdFlag = usdCurrency.data[0].flags.png;
                    const symbol = usdCurrency.data[0].currencies.USD.symbol;
                    console.log(usdId);
                    console.log(usdFlag);
                    console.log(symbol);
                   setIsFlagVisible2(usdFlag)
                } catch (error) {
                    
                }
            };
            dollarCurr();
        }, []);

        // Fetch British Pounds
        const [isFlagVisible3, setIsFlagVisible3] = useState("");
        useEffect(() => {
            const pounds = async () => {
                try {
                    const gbpCurrency = await axios.get(
                      "https://restcountries.com/v3.1/name/united%20kingdom"
                    );
                    const gbpId = gbpCurrency.data[0].currencies;
                    const gbpFlag = gbpCurrency.data[0].flags.png;
                    const symbol = gbpCurrency.data[0].currencies.GBP.symbol;
                    console.log(gbpId);
                    console.log(gbpFlag);
                    console.log(symbol);
                   setIsFlagVisible3(gbpFlag)
                } catch (error) {
                    
                }
            };
            pounds();
        }, []);
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
            {isFlagVisible2 && (
              <div className="currencyitem">
                <img src={isFlagVisible2} alt="" />
                <div className="currencyDesc">
                  <p>
                    <strong style={{ position: "relative", top: "5px" }}>
                      USD
                    </strong>
                  </p>
                  <p style={{ position: "relative", top: "-7px" }}>
                    United States Dollar
                  </p>
                </div>
              </div>
            )}
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
            {isFlagVisible3 && (
              <div className="currencyitem">
                <img src={isFlagVisible3} alt="" />
                <div className="currencyDesc">
                  <p>
                    <strong style={{ position: "relative", top: "5px" }}>
                      GBP
                    </strong>
                  </p>
                  <p style={{ position: "relative", top: "-7px" }}>
                    British Pound
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;
