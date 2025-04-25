import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import backlink from "../assets/backlink.svg";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const currencyConfigs = [
  {
    code: "USD",
    name: "United States Dollar",
    endpoint: "name/united states",
    currencyKey: "USD",
    index: 1
  },
  {
    code: "COP",
    name: "Colombian Peso",
    endpoint: "currency/cop",
    currencyKey: "COP",
  },
  {
    code: "GBP",
    name: "British Pound",
    endpoint: "name/united kingdom",
    currencyKey: "GBP",
  },
  {
    code: "NGN",
    name: "Nigerian Naira",
    endpoint: "name/nigeria",
    currencyKey: "NGN",
  },
];

const Currency = () => {
  const navigate = useNavigate();
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isCurrencyFound, setIsCurrencyFound] = useState(true);
  const currencyInput = useRef(null);
  const allCurrencies = useRef([]);

  // Fetch all currencies on load
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const results = await Promise.all(
          currencyConfigs.map(async (config) => {
            const res = await axios.get(
              `https://restcountries.com/v3.1/${config.endpoint}`
            );
            const data = res.data[config.index || 0];
            return {
              code: config.code,
              name: config.name,
              flag: data.flags?.png,
              symbol: data.currencies?.[config.currencyKey]?.symbol || "",
            };
          })
        );
        setCurrencies(results);
      } catch (err) {
        setError(`An error occurred fetching currency data: ${err}`);
        console.error(err);
      }
    };

    fetchCurrencies();
  }, []);


  // Currency search logic
  useEffect(() => {
    allCurrencies.current = document.querySelectorAll(".currencyitem");
    const handleSearch = () => {
      const filter = currencyInput.current.value.trim().toLowerCase();
      let found = false;

      allCurrencies.current.forEach((item) => {
        const text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
          item.style.display = "";
          found = true;
        } else {
          item.style.display = "none";
        }
      });

      setIsCurrencyFound(found);
    };

    const input = currencyInput.current;
    input.addEventListener("input", handleSearch);
    return () => input.removeEventListener("input", handleSearch);
  }, []);

  // Click-to-select logic
  useEffect(() => {
    allCurrencies.current = document.querySelectorAll(".currencyitem");
    const input = currencyInput.current;

    allCurrencies.current.forEach((item) => {
      item.addEventListener("click", () => {
        const text = item.innerText;
        input.value = text;
        setSuccessMessage(`Currency now set to ${text} successfully`);
        setTimeout(() => setSuccessMessage(""), 5000);
      });
    });
  }, [currencies]);

  return (
    <>
      <Helmet>
        <title>Select Your Preferred Currency - KEEV</title>
        <meta
          name="description"
          content="Currency page - select your currency"
        />
      </Helmet>

      <div className="container_Dashboard lang-Container">
        <div className="icon_Back">
          <img
            src={backlink}
            id="backLink"
            onClick={() => navigate("/Dashboard")}
            alt="Back"
          />
        </div>

        <div className="pageHead">
          <h2>Currency Preference</h2>
        </div>

        {successMessage && (
          <div className="languageModalSuccess modalMessage">
            <p>{successMessage}</p>
          </div>
        )}

        {error && (
          <p style={{ color: "#500101", borderRadius: "5px" }}>{error}</p>
        )}

        <div className="currencySelect">
          <div className="inputCurrency">
            <input
              type="search"
              id="search-input"
              placeholder="Search your preferred Currency"
              ref={currencyInput}
            />
          </div>

          {!isCurrencyFound && (
            <div>
              <p>Sorry, we couldn't find the currency you're searching for.</p>
            </div>
          )}

          <div className="currencyLists">
            {currencies.map(({ code, name, flag }, idx) => (
              <div className="currencyitem" key={idx}>
                <img src={flag} alt={code} />
                <div className="currencyDesc">
                  <p>
                    <strong style={{ position: "relative", top: "5px" }}>
                      {code}
                    </strong>
                  </p>
                  <small style={{ position: "relative", top: "-7px" }}>
                    {name}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;
