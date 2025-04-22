import React, { useRef } from "react";
import { useState, useEffect } from "react";
import backlink from "../assets/backlink.svg";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";


const LanguagesOpt = () => {

    const backNav = useNavigate();

    const navigateBack = () => {
        backNav("/Dashboard");
    };

 const inputSearch = useRef(null);
 const allLangs = useRef([]);
 const [isLanguageVisible, setislanguageVisible] = useState(true);
 allLangs.current = document.querySelectorAll(".langItem");
 const arrayLangs = [allLangs.current];
 console.log(arrayLangs);
 const [isModalsuccess, setIsModalSuccess] = useState('')

useEffect(() => {
  allLangs.current = document.querySelectorAll(".langItem");

  const searchLangs = () => {
    const filterSearch = inputSearch.current.value.trim().toLowerCase();
    let matFoundText = false;

    allLangs.current.forEach((lang) => {
      const langText = lang.textContent;
      console.log(langText);
      if (langText.toLowerCase().includes(filterSearch)) {
        matFoundText = true;
        lang.style.display = "block";
      }else{
        lang.style.display = "none";
      }
    });

    setislanguageVisible(matFoundText); 
  };

  inputSearch.current.addEventListener("input", searchLangs)

  // return () => {
  //   inputSearch.current.removeEventListener("input", searchLangs);
  // };
}, []);

useEffect(() => {
  const appendvalue = () => {
    allLangs.current = document.querySelectorAll(".langItem");
    allLangs.current.forEach((langs) => {
      const langItem = langs.textContent;
      langs.addEventListener("click", () => {
        inputSearch.current.value = langItem;
        setIsModalSuccess(`Page Language set to ${langItem} successfully`);
        setTimeout(() => {
            setIsModalSuccess('')
        }, 4000)
        // alert(`Clicked ${langItem}`);
      });
    });
  };
  appendvalue();
}, []);


  

        return (
          <>
            <Helmet>
              <title>Select Your Preffered Language</title>
              <meta name="description" content="language Preference" />
            </Helmet>

            <div className="container_Dashboard lang-Container">
              <div className="icon_Back">
                <img
                  src={backlink}
                  id="backLink"
                  onClick={navigateBack}
                  alt=""
                />
              </div>
              <div className="pageHead">
                <h2>Language Options</h2>
              </div>
              {isModalsuccess && (
                <div className="languageModalSuccess">
                  <p>{isModalsuccess}</p>
                </div>
              )}
              <div className="langSearch">
                {/* Replace with Google Translate API */}
                <div className="inputLang">
                  <input
                    type="search"
                    id="search-input"
                    placeholder="Search your preferred Language"
                    ref={inputSearch}
                  />
                </div>
                {!isLanguageVisible && (
                  <div className="errorMessage">
                    <p>No languages found for your search</p>
                  </div>
                )}
                <div className="searchList">
                  {/* <ul id="langList"> */}
                  <div className="langItem">English <small>(Default)</small> </div>
                  <div className="langItem">French</div>
                  <div className="langItem">Spanish</div>
                  <div className="langItem">German</div>
                  <div className="langItem">Italian</div>
                  <div className="langItem">Chinese</div>
                  <div className="langItem">Igbo</div>
                  <div className="langItem">Swahil</div>
                  <div className="langItem">Romanian</div>
                  <div className="langItem">Swedish</div>
                  <div className="langItem">Yoruba</div>
                  <div className="langItem">Hausa</div>
                  <div className="langItem">Efik</div>
                  {/* </ul> */}
                </div>
              </div>
            </div>
          </>
        );
};

export default LanguagesOpt