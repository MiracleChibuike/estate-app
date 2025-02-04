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
import axios from "axios"

const Services = () => {
  const navigateDesc = useNavigate();

  const cards = useRef(null);

  useEffect(() => {
    cards.current = document.querySelectorAll(".cardFeatured");
    console.log(cards);
    cards.current.forEach((card) => {
      card.addEventListener("click", () => {
        navigateDesc("/Description");
      });
    });
  })


  // Fetch Data from API

  const selectTag = useRef(null);
  // const errorDisplayVal = useRef(null);
  // errorDisplayVal.style.display = "none";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [data, setData] = useState([]);

  useEffect(() => {
    // errorDisplayVal = document.getElementById("errorDisplay");
    const headers = new Headers();
        headers.append("X-Api-Key", "4hueXJfjAZAV3FaBKX93Z9xun0Ffnxdo");

    const options = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://naija-places.toneflix.com.ng/api/v1/states", options
        ); // Fetch data from the API
        // if (!response.ok) {
        //   const errorMessage = `An error occurred: ${response.status}`;
        //   throw new Error(errorMessage);
        // }
        // setData(response.data);
        console.log(response)
        // const statesdata = await response.json();
        // console.log(statesdata);
        const showAllData = response.data.data;
        console.log(showAllData);
        // // // console.log(showAllData[0].name);
        showAllData.forEach((state) => {
          // console.log(state.lat);
          const option = document.createElement("option");
          option.value = state.name;
          option.textContent = state.name;
          selectTag.current.appendChild(option);
          // errorDisplayVal.current.style.display = "none";
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.errorMessage);
        // alert(`An error occurred while fetching lists of states: ${error.message}`);
        // errorDisplayVal.style.display = "block";
        // errorDisplayVal.current.textContent = `An error occurred while fetching data: ${error.message}`;
        // selectTag.current.textContent = ;
        // Improved error handling
        // ... handle the error, e.g., display an error message to the user
      } finally {
        setLoading(false);
      }
    };
    // console.log(selectTag);
    // console.log(errorDisplayVal)

    fetchData();
    // selectTag.addEventListener("click", fetchData)
  }, []);

  if (loading) {
    return <div>Fetching states.....</div>;
  }

  // if (error) {
  //   return a
  // }

  // Call another API to fetch the properties

  // useEffect(() => {
  //   const headers = new Headers();
  //   const options = {
  //     method: "GET",
  //     headers: headers,
  //     redirect: "follow",
  //   };

  //   headers.append("X-Api-Key", "API_KEY");
  //   const fetchCities = async () => {
  //     try {
  //       const citiesUrl = await fetch(
  //         "https://naija-places.toneflix.com.ng/api/v1/states/{siso}/cities", options
  //       );
  //       if (!citiesUrl.ok) {
  //         const NewErrorMessage = `An error occurred: ${citiesUrl.status}`;
  //         throw new Error(NewErrorMessage);

  //       }
  //       const showCities = await citiesUrl.json();
  //       console.log(showCities);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchCities();
  // }, []);

  return (
    <>
      <NavServices />
      <div className="servicesHome">
        <div className="homeImg">
          <p className="headingHome">
            Easy way to find your <strong>Dream Property</strong>
          </p>
        </div>
        {/* Featured Property */}
        <div className="featured">
          <h2 className="featuresHead">
            Our Featured <span>Property</span>
          </h2>

          {/* Filter Section */}
          <div className="filter">
            <div className="filterItems">
              <p>Filter by States:</p>
              <select name="filter" id="filter" ref={selectTag}>
                {/* <option value="" id="errorDisplay" ref={errorDisplayVal}></option> */}
              </select>
            </div>
          </div>
          <div className="featuredHouses">
            <div className="cardFeatured">
              <img src={house2} alt="" />
              <div className="cardInfo">
                <div className="housedetails">
                  <p>
                    {" "}
                    <strong>Bluebell Cottage</strong>
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
              <img src={house7} alt="" />
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
              <img src={background} alt="" />
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
              <img src={house3} alt="" />
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
              <img src={house4} alt="" />
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
              <img src={house5} alt="" />
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
              <img src={house6} alt="" />
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
              <img src={house8} alt="" />
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
              <img src={house9} alt="" />
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
              <img src={house10} alt="" />
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
              <img src={hous11} alt="" />
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
              <img src={main} alt="" />
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
