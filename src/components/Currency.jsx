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
  const [isErrorVisible, setIsErrorVisible] = useState("");

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
          console.log(allCurrency);
        });
        setIsFlagVisible(apiData);
      } catch (error) {
        console.log(error);
        setIsErrorVisible(`An error occurred fetching the data ${error}`);
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
        const usdFlag = usdCurrency.data[1].flags.png;
        const symbol = usdCurrency.data[0].currencies.USD.symbol;
        console.log(usdCurrency.data);
        console.log(usdFlag);
        console.log(symbol);
        setIsFlagVisible2(usdFlag);
      } catch (error) {}
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
        setIsFlagVisible3(gbpFlag);
      } catch (error) {}
    };
    pounds();
  }, []);

  // Fetch Nigerian Currency
  const [isFlagVisible4, setIsFlagVisible4] = useState("");
  const [showSymbol, setShowSymbol] = useState("");
  useEffect(() => {
    const fetchNaira = async () => {
      try {
        const nairaURL = await axios.get(
          "https://restcountries.com/v3.1/name/nigeria"
        );
        const nairaData = await nairaURL.data[0].currencies;
        const nairaFlag = await nairaURL.data[0].flags.png;
        const nairaSymbol = await nairaURL.data[0].currencies.NGN.symbol;
        console.log(nairaSymbol);
        setShowSymbol(nairaSymbol);
        console.log(nairaFlag);
        console.log(nairaData);
        setIsFlagVisible4(nairaFlag);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNaira();
  }, []);

  // Search Curencies
  let currencyInput = useRef(null);
  const allCurrencies = useRef([]);
  const [isCurrencyFound, setIsCurrencyFound] = useState(true);
  const [isCurrencySet, setIsCurrencySet] = useState("");
  allCurrencies.current = document.querySelectorAll(".currencyitem");
  console.log(allCurrencies.current);
  // console.log(currencyInput.current)

  useEffect(() => {
    allCurrencies.current = document.querySelectorAll(".currencyitem");
    // console.log(allCurrencies.current);
    const returnCurrencyLists = () => {
      let currencyFound = false;
      let filterCurrency = currencyInput.current.value.trim().toLowerCase();

      allCurrencies.current.forEach((curr) => {
        let currencyText = curr.textContent;
        if (currencyText.toLowerCase().includes(filterCurrency)) {
          currencyFound = true;
          curr.style.display = "";
        } else {
          curr.style.display = "none";
        }
      });
      // Return the state message here if not found
      setIsCurrencyFound(currencyFound);
    };
    const inputSearch = currencyInput.current;
    inputSearch.addEventListener("input", returnCurrencyLists);

    return () => {
      inputSearch.removeEventListener("input", returnCurrencyLists);
    };
  }, []);

  useEffect(() => {
        allCurrencies.current = document.querySelectorAll(".currencyitem");
                    let newFilter = currencyInput.current;
        const addValueToInput = () => {
               console.log(allCurrencies.current)
               allCurrencies.current.forEach((currency) => {
                const currencyText = currency.innerText;
                currency.addEventListener("click", () => {
                  newFilter.value = currencyText;
                  console.log(currencyText);
                  setIsCurrencySet(`Currency now set to ${currencyText} succesfully`);
                  setTimeout(() => {
                      setIsCurrencySet('')
                  }, 5000)
                });
               });
        };

        addValueToInput();
  }, []);

  return (
    <>
      <Helmet>
        <title>Select Your Preferred Currency - KEEV</title>
        <meta name="description" content="Currency page select your currency" />
        {/* <link rel="shortcut icon" href={backlink} type="image/x-icon" /> */}
      </Helmet>
      <div className="container_Dashboard lang-Container">
        <div className="icon_Back">
          <img src={backlink} id="backLink" onClick={navigateBack} alt="" />
        </div>
        <div className="pageHead">
          <h2>Currency Preference</h2>
        </div>
        {/* Display error when data can't be fetched */}
        {isCurrencySet && (
          <div className="languageModalSuccess">
            <p>{isCurrencySet}</p>
          </div>
        )}
        {isErrorVisible && (
          <p style={{ color: "#500101", borderRadius: "5px" }}>
            {isErrorVisible}
          </p>
        )}
        {/* Currency container */}
        <div className="currencySelect">
          <div className="inputCurrency">
            <input
              type="search"
              id="search-input"
              placeholder="Search your preferred Currency"
              ref={currencyInput}
            />
          </div>
          {/* Error Message when currency not available */}
          {!isCurrencyFound && (
            <div>
              <p>Sorry, we couldn't find the currency you're searaching for.</p>
            </div>
          )}
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
                  <small style={{ position: "relative", top: "-7px" }}>
                    United States Dollar
                  </small>
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
                  <small style={{ position: "relative", top: "-7px" }}>
                    Colombian Peso
                  </small>
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
                  <small style={{ position: "relative", top: "-7px" }}>
                    British Pound
                  </small>
                </div>
              </div>
            )}
            {isFlagVisible4 && (
              <div className="currencyitem">
                <img src={isFlagVisible4} alt="" />
                <div className="currencyDesc">
                  <p>
                    <strong style={{ position: "relative", top: "5px" }}>
                      NGN
                    </strong>
                  </p>
                  <small style={{ position: "relative", top: "-7px" }}>
                    Nigerian Naira
                  </small>
                </div>
              </div>
            )}
            {/* <div className="currencyitem"></div> */}
            {/* <div className="currencyitem"></div> */}
            {/* <div className="currencyitem"></div> */}
            {/* <div className="currencyitem"></div> */}
            {/* <div className="currencyitem"></div> */}
            {/* <div className="currencyitem"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;
