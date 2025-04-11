import { Links } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavServices from "./NavServices";
import "./Services.css";
import Footer from "./Footer";
import background from "../assets/background.png";
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

  const cards = useRef(null);
const navigateHouse = useNavigate()
  useEffect(() => {
    cards.current = document.querySelectorAll(".cardFeatured");
    console.log(cards);
    cards.current.forEach((card) => {
      card.addEventListener("click", (event) => {
        const imgSrc = card.querySelector("img")?.src || "";
        const houseInfo = card.querySelector(".housedetails")?.textContent || "";
        const houseLocation = card.querySelector(".houseLocation")?.textContent || "";
        // Store both image and info in LocalStorage
        localStorage.setItem(
          "selectedHouse",
          JSON.stringify({ imgSrc, houseInfo, houseLocation }));
          navigateHouse("/HouseDescription");
      });
    });


    // Clean up event listeners
    return () => {
        cards.current.forEach((card) => {
          card.removeEventListener("click", (event) => {
            const imgSrc = card.querySelector("img")?.src || "";
             const houseInfo =
               card.querySelector(".housedetails")?.textContent || "";
             const houseLocation =
               card.querySelector(".houseLocation")?.textContent || "";
            // Store both image and info in LocalStorage
            localStorage.setItem(
              "selectedHouse",
              JSON.stringify({ imgSrc, houseInfo, houseLocation })
            );
            navigateHouse("/HouseDescription");
          });
        });
    };

  }, [])


  // Script to get all images and route to specific pages when selected
//   const allImages = useRef(null);
//   const houseNavigate = useNavigate()
// useEffect(() => {
//   allImages.current = document.querySelectorAll(".imageDesc");
//   console.log(allImages);

//   allImages.current.forEach((img) => {
//     img.addEventListener("click", (e) => {
//       localStorage.setItem("selectedImg", e.target.src);
//       houseNavigate("/House");
//     });
//   });

//   // Cleanup function to remove event listeners when the component unmounts
//   return () => {
//     allImages.current.forEach((img) => {
//       img.removeEventListener("click", (e) => {
//         localStorage.setItem("selectedImg", e.target.src);
//         houseNavigate("/House");
//       });
//     });
//   };
// }, []);

// const allCardsInfo = useRef(null);

// useEffect(() => {
//     allCardsInfo.current = document.querySelectorAll(".cardInfo");
//     console.log(allCardsInfo);
//     allCardsInfo.current.forEach((info) => {
//       info.addEventListener("click", (e) => {
//         sessionStorage.setItem("houseInfo", info.textContent)
//        houseNavigate("/House")
//       })
//     })
// }, [])

  // Fetch Data from API

  // const selectTag = useRef(null);
  // // const errorDisplayVal = useRef(null);
  // // errorDisplayVal.style.display = "none";
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [data, setData] = useState([]);
  // const [errorMessage, setErrorMessage] = useState("")

  // useEffect(() => {
  //   // if (!selectTag.current) return;
  //   // errorDisplayVal = document.getElementById("errorDisplay");
  //   const headers = new Headers();
  //       headers.append("X-Api-Key", "4hueXJfjAZAV3FaBKX93Z9xun0Ffnxdo");

  //   const options = {
  //     method: "GET",
  //     headers: headers,
  //     redirect: "follow",
  //   };

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://naija-places.toneflix.com.ng/api/v1/states", options
  //       );
  //       setData(response.data.data);
  //       // console.log(response)
  //       // const showAllData = response.data.data;
  //       // console.log(showAllData);
  //       // // // console.log(showAllData[0].name);
  //     // if (selectTag.current) {
  //     //   showAllData.forEach((state) => {
  //     //     const option = document.createElement("option");
  //     //     option.value = state.name;
  //     //     option.textContent = state.name;
  //     //     selectTag.current.appendChild(option);
  //     //   });
  //     // }

  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       const errorTxt = `Sorry can't fetch states: ${error.message}`;
       
  //         if (!errorMessage) {
  //            setErrorMessage(errorTxt);
  //            alert(errorTxt);
  //         }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   // console.log(selectTag);
  //   // console.log(errorDisplayVal)

  //   fetchData();
  //   // selectTag.addEventListener("click", fetchData)
  // }, []);

  // if (loading) {
  //   return <div>Fetching states.....</div>;
  // }

  // Return houses according to user search
  const [showMessage, setMessage] = useState(false);
  const messageDiv = useRef(null)
  const filterRef = useRef(null);

  useEffect(() => {
    console.log(filterRef);
          console.log(cards);

    const runFilter = () => {
      const filterCase = filterRef.current.value.toLowerCase();
      let matchFound = false;
      cards.current.forEach((list) => {
        const cardText = list.textContent;
        if (cardText.toLowerCase().includes(filterCase.toLowerCase())) {
          list.style.display = "";
          matchFound = true;
          //  messageDiv.current.style.display == "none";
        }else{
          list.style.display = "none"
          // return messageDiv.current
        //  messageDiv.current.style.display = "block"
        }
      });

      if (matchFound) {
        messageDiv.current.style.display = "none"
      }else{
        messageDiv.current.style.display = "block"
      }
    };
    filterRef.current.addEventListener("input", runFilter)
  
  }, []);

  const servicesContainer = useRef(null);
  const loadreServices = useRef(null);

  useEffect(() => {
      const servicesAnim = () => {
        setTimeout(() => {
            loadreServices.current.style.display = "none"
            servicesContainer.current.style.display = "block";
        }, 3000)
      };

      servicesAnim();
  }, [])

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
            <h2 className="featuresHead">
              Our Featured <span>Property</span>
            </h2>

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
                class="fa-solid fa-magnifying-glass"
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
                class="fa-solid fa-magnifying-glass"
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
            </div>
            {/* Div to display incase search houses return error */}
            <div
              className="messageInvalid"
              style={{ display: "none" }}
              ref={messageDiv}>
              No houses match your search. Keep searching, your perfect match
              might be here
            </div>
            <div className="featuredHouses">
              <div className="cardFeatured">
                <img src={house2} className="imageDesc" alt="" />
                <div className="cardInfo">
                  <div className="housedetails">
                    <p>
                      {" "}
                      <strong className="houseName">Bluebell Cottage</strong>
                    </p>

                    <p>
                      {" "}
                      <strong>₦23,500,000</strong>
                    </p>
                  </div>
                  <div className="houseLocation">
                    <p>Lagos, Nigeria</p>
                    <p>4 Bedroom Flat</p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="cardFeatured">
                <img src={house7} className="imageDesc" alt="" />
                <div className="cardInfo">
                  <div className="housedetails">
                    <p>
                      <strong>Willow Cottage</strong>
                    </p>

                    <p>
                      {" "}
                      <strong>₦20,500,000</strong>
                    </p>
                  </div>
                  <div className="houseLocation">
                    <p>Delta, Nigeria</p>
                    <p>3 Bedroom Flat</p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="cardFeatured">
                <img src={background} className="imageDesc" alt="" />
                <div className="cardInfo">
                  <div className="housedetails">
                    <p>
                      {" "}
                      <strong>Ivy Hall</strong>
                    </p>
                    <p>
                      <strong>₦50,500,000</strong>
                    </p>
                  </div>
                  <div className="houseLocation">
                    <p>Anambra, Nigeria</p>
                    <p>4 Bedroom Flat</p>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="cardFeatured">
                <img src={house3} className="imageDesc" alt="" />
                <div className="cardInfo">
                  <div className="housedetails">
                    <p>
                      {" "}
                      <strong>Tranquility Base</strong>
                    </p>
                    <p>
                      <strong>₦30,000,000</strong>
                    </p>
                  </div>
                  <div className="houseLocation">
                    <p>Enugu, Nigeria</p>
                    <p>5 Bedroom Flat</p>
                  </div>
                </div>
              </div>
              {/* Card 5 */}
              <div className="cardFeatured">
                <img src={house4} className="imageDesc" alt="" />
                <div className="cardInfo">
                  <div className="housedetails">
                    <p>
                      {" "}
                      <strong>Bella Vista</strong>
                    </p>
                    <p>
                      <strong>₦30,500,000</strong>
                    </p>
                  </div>
                  <div className="houseLocation">
                    <p>Bayelsa, Nigeria</p>
                    <p>2 Bedroom Flat</p>
                  </div>
                </div>
              </div>
              {/* card 6 */}
              <div className="cardFeatured">
                <img src={house5} className="imageDesc" alt="" />
                <div className="cardInfo">
                  <div className="housedetails">
                    <p>
                      {" "}
                      <strong>Lakeside Bliss</strong>
                    </p>
                    <p>
                      <strong>₦25,000,000</strong>
                    </p>
                  </div>
                  <div className="houseLocation">
                    <p>Ebonyi, Nigeria</p>
                    <p>5 Bedroom Flat</p>
                  </div>
                </div>
              </div>
              {/* Card 7 */}
              <div className="cardFeatured">
                <img src={house6} className="imageDesc" alt="" />
                <div className="cardInfo">
                  <div className="housedetails">
                    <p>
                      {" "}
                      <strong>Pebble Brook</strong>
                    </p>
                    <p>
                      <strong>₦5,500,000</strong>
                    </p>
                  </div>
                  <div className="houseLocation">
                    <p>Ondo, Nigeria</p>
                    <p>4 Bedroom Flat</p>
                  </div>
                </div>
              </div>
              {/* Card 8 */}
              <div className="cardFeatured">
                <img src={house8} className="imageDesc" alt="" />
                <div className="cardInfo">
                  <div className="housedetails">
                    <p>
                      {" "}
                      <strong>Greenland Estate</strong>
                    </p>
                    <p>
                      <strong>₦53,500,000</strong>
                    </p>
                  </div>
                  <div className="houseLocation">
                    <p>Imo, Nigeria</p>
                    <p>4 Bedroom Flat</p>
                  </div>
                </div>
              </div>
              {/* Card 9 */}
              <div className="cardFeatured">
                <img src={house9} className="imageDesc" alt="" />
                <div className="cardInfo">
                  <div className="housedetails">
                    <p>
                      {" "}
                      <strong>Raven Shadow</strong>
                    </p>
                    <p>
                      <strong>₦50,000,000</strong>
                    </p>
                  </div>
                  <div className="houseLocation">
                    <p>Abuja, Nigeria</p>
                    <p>3 Bedroom Flat</p>
                  </div>
                </div>
              </div>
              {/* Card 10 */}
              <div className="cardFeatured">
                <img src={house10} className="imageDesc" alt="" />
                <div className="cardInfo">
                  <div className="housedetails">
                    <p>
                      {" "}
                      <strong>Pinecone Lodge</strong>
                    </p>
                    <p>
                      <strong>₦50,500,000</strong>
                    </p>
                  </div>
                  <div className="houseLocation">
                    <p>Bayelsa, Nigeria</p>
                    <p>5 Bedroom Flat</p>
                  </div>
                </div>
              </div>
              {/* Card 11 */}
              <div className="cardFeatured">
                <img src={hous11} className="imageDesc" alt="" />
                <div className="cardInfo">
                  <div className="housedetails">
                    <p>
                      {" "}
                      <strong>Miracle Garden Villa</strong>
                    </p>
                    <p>
                      <strong>₦97,000,000</strong>
                    </p>
                  </div>
                  <div className="houseLocation">
                    <p>Imo, Nigeria</p>
                    <p>7 Bedroom Flat</p>
                  </div>
                </div>
              </div>
              {/* Card 12 */}
              <div className="cardFeatured">
                <img src={main} className="imageDesc" alt="" />
                <div className="cardInfo">
                  <div className="housedetails">
                    <p>
                      {" "}
                      <strong>Dragonspire Keep</strong>
                    </p>
                    <p>
                      <strong>₦100,000,000</strong>
                    </p>
                  </div>
                  <div className="houseLocation">
                    <p>Abuja, Nigeria</p>
                    <p>6 Bedroom Flat</p>
                  </div>
                </div>
              </div>
              {/* Card 13 */}
              <div className="cardFeatured">
                <img src={house7} className="imageDesc" alt="" />
                <div className="cardInfo">
                  <div className="housedetails">
                    <p>
                      <strong>Willow Cottage</strong>
                    </p>

                    <p>
                      {" "}
                      <strong>₦20,500,000</strong>
                    </p>
                  </div>
                  <div className="houseLocation">
                    <p>Delta, Nigeria</p>
                    <p>3 Bedroom Flat</p>
                  </div>
                </div>
              </div>
              {/* Card 14 */}
              <div className="cardFeatured">
                <img src={background} className="imageDesc" alt="" />
                <div className="cardInfo">
                  <div className="housedetails">
                    <p>
                      {" "}
                      <strong>Ivy Hall</strong>
                    </p>
                    <p>
                      <strong>₦50,500,000</strong>
                    </p>
                  </div>
                  <div className="houseLocation">
                    <p>Anambra, Nigeria</p>
                    <p>4 Bedroom Flat</p>
                  </div>
                </div>
              </div>
              {/* Card 15 */}
              <div className="cardFeatured">
                <img src={house3} className="imageDesc" alt="" />
                <div className="cardInfo">
                  <div className="housedetails">
                    <p>
                      {" "}
                      <strong>Tranquility Base</strong>
                    </p>
                    <p>
                      <strong>₦30,000,000</strong>
                    </p>
                  </div>
                  <div className="houseLocation">
                    <p>Enugu, Nigeria</p>
                    <p>5 Bedroom Flat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services;
