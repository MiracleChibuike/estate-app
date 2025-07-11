import { Links } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavServices from "./NavServices";
import "./Services.css";
import Footer from "./Footer";
import background from "../assets/background.png";
import HouseDescription from "./HouseDescription";
import Erect from "../assets/Erect.png"
import house2 from "../assets/house2.png";
import house3 from "../assets/house3.png";
import house4 from "../assets/house4.png";
import house5 from "../assets/house5.png";
import house6 from "../assets/house6.png";
import house7 from "../assets/house7.png";
import house8 from "../assets/house8.png";
import house9 from "../assets/house9.png";
import house10 from "../assets/house10.png";
import hous11 from "../assets/house11.png";
import last from "../assets/last.png";
import last2 from "../assets/last2.png";
import main from "../assets/main.png"
import { use } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// import House from "./House";

const Services = () => {
  const navigateDesc = useNavigate();
  const handleHouseClick = (id) => {
    navigateDesc(`/HouseDescription`);
  };
  

  const cards = useRef(null);
const navigateHouse = useNavigate()
  // useEffect(() => {
  //   cards.current = document.querySelectorAll(".cardFeatured");
  //   // console.log(cards);
  //   cards.current.forEach((card) => {
  //     card.addEventListener("click", (event) => {
  //       const imgSrc = card.querySelector("img")?.src || "";
  //       const houseInfo = card.querySelector(".housedetails")?.textContent || "";
  //       const houseLocation = card.querySelector(".houseLocation")?.textContent || "";
  //       // Store both image and info in LocalStorage
  //       localStorage.setItem(
  //         "selectedHouse",
  //         JSON.stringify({ imgSrc, houseInfo, houseLocation }));
  //         navigateHouse("/HouseDescription");
  //     });
  //   });


    // Clean up event listeners
  //   return () => {
  //       cards.current.forEach((card) => {
  //         card.removeEventListener("click", (event) => {
  //           const imgSrc = card.querySelector("img")?.src || "";
  //            const houseInfo =
  //              card.querySelector(".housedetails")?.textContent || "";
  //            const houseLocation =
  //              card.querySelector(".houseLocation")?.textContent || "";
  //           // Store both image and info in LocalStorage
  //           localStorage.setItem(
  //             "selectedHouse",
  //             JSON.stringify({ imgSrc, houseInfo, houseLocation })
  //           );
  //           navigateHouse("/HouseDescription");
  //         });
  //       });
  //   };

  // }, [])

  const messageDiv = useRef(null);
  const filterRef = useRef(null);
  const errorDisplay = useRef(null)
  // Hook to use for API Fetching
const [Listings, setListings] = useState([]);
const [loader, setIsLoader] = useState(false);
const [selectedHouse, setSelectedHouse] = useState(null); // A state for selected house
useEffect(() => {
  const fetchHouseListings = async () => {
    setIsLoader(true); // Rigth place to put before I start making the call
    try {
      const response = await axios.get(
        "https://estate-app-keev.onrender.com/houseListings"
      );
      //  console.log(response.statusText);
      const result = await response.data;
       console.log(result);
      // setIsLoader(true);// This is wrong because I have already gotten the data here
      setListings(result);
      // Redirect users to a particular property according to their selection
      result.forEach(
        (property, hId, propname, propDescription, propAmount, propImage) => {
          const houseName = property.name;
          const houseDescriptionsLong = property.description;
          const houseAmount = property.amount;
          const houseImage = property.image;
          // console.log(houseName, houseDescriptionsLong, houseAmount, houseImage)
          property.features.forEach((features) => {
            const houseFeatures = features;
            // console.log(houseFeatures)
          });
        }
      );
    } catch (error) {
      const newYes = error;
      const newEl = document.createElement("div");
      newEl.className = "ErrorData"
      newEl.textContent = `An Error occured fetching house listings: ${
        error.response?.status || "Unable to reach Server."
      } - (${error.message}). Make sure you are connected to the Internet or refresh this page `;
      errorDisplay.current.appendChild(newEl);
      console.error(
        `An Error occured fetching house listings: ${
          error.response?.status || "Unable to reach Server."
        } - ${error.message}. Make sure you are connected to the Internet or refresh this page`
      );
    }finally{
      setIsLoader(false);
    }
  };
  fetchHouseListings();
}, []);

// API to search for Houses
const [results, setResults] = useState([])
const [searchTerm, setSearchTerm] = useState("");
const [isInputFilled, setIsInputFilled] = useState(false);
const [messageRef, setIsMessageRef] = useState(false);

const runFilter = async () => {
  const inputValue = filterRef.current.value.trim().toLowerCase();

  if (!inputValue) {
    setIsInputFilled(true);
    setTimeout(() => {
      setIsInputFilled(false)
    }, 7000)
    setResults([]);
    return;
  }

  try {
    const response = await axios.get(
      `https://estate-app-keev.onrender.com/houseListings`
    );
    // Manually filter for EXACT matches in the name field
    const exactMatches = response.data.filter(
      (house) =>
        house.name.toLowerCase().includes(inputValue) ||
        house.location.toLowerCase().includes(inputValue)
    );

    setResults(exactMatches);

    if (exactMatches.length > 0) {
      alert(`Found ${exactMatches.length} house(s) matching "${inputValue}"`);
      setIsMessageRef(false);
    } else {
      // alert(`No house found matching "${inputValue}"`);
      setIsMessageRef(true);
      errorDisplay.current.style.display = "none";
      setResults([]);
      setTimeout(() => {
        location.reload();
      }, 3000)
    }
  } catch (error) {
    console.error("Error searching listings:", error);
    setResults([]);
    setIsMessageRef(true);
    errorDisplay.current.style.display = "none";
  }
};

useEffect(() => {
  const inputValue = filterRef.current;

  const handleSearchKey = (e) => {
    if (e.key === "Enter") {
      runFilter()
    }
  };

  inputValue.addEventListener("keydown", handleSearchKey);

  //Clean up Event
  return () => {
    inputValue.removeEventListener("keydown", handleSearchKey);
  }

}, [])


  // Handle loader
  const servicesContainer = useRef(null);
  const loadreServices = useRef(null);
  useEffect(() => {
      const servicesAnim = () => {
        setTimeout(() => {
            loadreServices.current.style.display = "none"
            servicesContainer.current.style.display = "block";
        }, 1000)
      };

      servicesAnim();
  }, []);

  // for testing
  const loadHouseDescription = () => {
    navigateHouse("/HouseDescription");
  }

 
  


  return (
    <>
      <Helmet>
        <title>Explore our Services | KEEV</title>
        <meta name="description" content="Explore our Services" />
      </Helmet>
      {/* Loadre Animation Container */}
      <div id="headerShow" ref={loadreServices}>
        <span id="loader"></span>
      </div>
      <div className="servicesMaster" ref={servicesContainer}>
        <NavServices />
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={house8}
                className="d-block w-100"
                alt=""
                rel="preload"
                fetchpriority="high"
                style={{ filter: "brightness(50%)" }}
              />
              <div className="houseTextHome">
                <p className="headingHome">
                  Easy way to find your <strong>Dream Property</strong>
                </p>
                <small>
                  Find the ideal space that suits your needs, whether it's for
                  living, working, or investing
                </small>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={house7}
                className="d-block w-100"
                id="image"
                style={{ filter: "brightness(50%)", width: "100px" }}
                alt=""
                rel="preload"
                fetchpriority="high"
              />
              <div className="houseTextHome">
                <p className="headingHome">
                  Easy way to find your <strong>Ideal Home</strong>
                </p>
                <small>
                  Explore a wide variety of properties that fit your lifestyle
                  and budget, making your dream home a reality
                </small>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={house4}
                className="d-block w-100"
                id="image33"
                alt=""
                rel="preload"
                fetchpriority="high"
                style={{ filter: "brightness(50%)" }}
              />
              <div className="houseTextHome">
                <p className="headingHome">
                  Easy way to find your <strong>Perfect Space</strong>
                </p>
                <small>
                  Find the ideal space that suits your needs, whether it's for
                  living, working, or investing
                </small>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            style={{ color: "white" }}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="servicesHome">
          {/* <div className="homeImg">
          <img src={Erect} alt="" id="erect" />
          <p className="headingHome">
            Easy way to find your <strong>Dream Property</strong>
          </p>
        </div> */}
          {/* Featured Property */}
          <div className="featured">
            <h2 className="featuresHead" onClick={loadHouseDescription}>
              Our Featured <span>Property</span>
            </h2>
            {/* Message to load when user doesn't provide a search term */}
            {isInputFilled && (
              <div className="searchValid">
                <div>
                  {" "}
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
                <p> Please enter name of property or location</p>
              </div>
            )}
            {/* Filter Section */}
            {/* <div className="filter">
            <div className="filterItems">
              <p>Filter by States:</p>
              <select name="filter" id="filter" ref={selectTag}>
                <option value="">Select a state</option>
                {data.map((state) => (
                  <option key={state.name} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </div> */}
            <div className="searchFilter">
              <i
                className="fa-solid fa-magnifying-glass"
                id="search-icon-media"
                style={{
                  color: "var(--clr-color-gray-trans)",
                  fontSize: "15px",
                  position: "relative",
                  top: "40px",
                  left: "7px",
                  zIndex: "100",
                }}></i>
              {/* Search Icon Desktop */}
              <i
                className="fa-solid fa-magnifying-glass"
                id="search-icon-Desktop"
                style={{
                  color: "var(--clr-color-gray-trans)",
                  fontSize: "15px",
                  position: "relative",
                  top: "-7px",
                  left: "21px",
                  zIndex: "100",
                }}></i>
              <input
                type="search"
                placeholder="Search by location or house name"
                ref={filterRef}
                id="filter"
              />
              <button id="buyButton" onClick={runFilter}>
                Search
              </button>
            </div>
            {/* Div to display incase search houses return error */}
            {messageRef && (
              <div className="messageInvalid" ref={messageDiv}>
                No houses match your search. Keep searching, your perfect match
                might be here
              </div>
            )}
            {/* Load Animation when fetching data from API */}
            {loader && (
              <div className="propLoader">
                <span className="loader"></span>
                <p>Getting available properties...</p>
              </div>
            )}

            <div className="featuredHouses" ref={errorDisplay}>
              {!selectedHouse ? (
                results.length > 0 ? (
                  results.map((houseResult) => (
                    <div
                      className="cardFeatured"
                      key={houseResult.id}
                      onClick={() =>
                        navigateDesc("/houseDescription", {
                          state: {house: houseResult },
                        })
                      }>
                      <img src={houseResult.image} alt="" />
                      <div className="cardInfo">
                        <div className="housedetails">
                          <p>
                            <b>{houseResult.name}</b>
                          </p>
                          <p>
                            <b>{houseResult.amount}</b>
                          </p>
                        </div>
                        <div className="houseLocation">
                          <p>{houseResult.location}</p>
                          <p>{houseResult.description_short}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  Listings.map((house) => (
                    <div
                      className="cardFeatured"
                      key={house.id}
                      onClick={() =>
                        navigateDesc("/houseDescription", { state: { house } })
                      }>
                      <img src={house.image} alt="" />
                      <div className="cardInfo">
                        <div className="housedetails">
                          <p>
                            <b>{house.name}</b>
                          </p>
                          <p>
                            <b>{house.amount}</b>
                          </p>
                        </div>
                        <div className="houseLocation">
                          <p>{house.location}</p>
                          <p>{house.description_short}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )
              ) : (
                <HouseDescription house={selectedHouse} />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services;