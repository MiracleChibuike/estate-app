
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import backlink from "../assets/backlink.svg";
import "./PropertyPage.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const HouseDescription = () => {
  // Re-direct back to services page
  // const bacKnavigate = useNavigate();
  const navigateBack = useNavigate();

  const backLinkNav = () => {
    navigateBack("/Services");
  };
  // Message to show when Buy button is clicked
  const buyMessage = () => {
    alert("Site still in progress  \n Can't place order at the moment ");
  };

  const displayImg = useRef(null);
  const displayCardInfo = useRef(null);
  const displayHouseLocation = useRef(null);

  const [error, setError] = useState(false);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    const fetchHouse = () => {
      const selectedHouseDetails = localStorage.getItem("selectedHouse");

      try {
        if (selectedHouseDetails) {
          const { imgSrc, houseInfo, houseLocation } =
            JSON.parse(selectedHouseDetails); // Parse the stored JSON

          if (displayImg.current) {
            displayImg.current.src = imgSrc; // Set image source
          }

          if (displayCardInfo.current) {
            displayCardInfo.current.innerHTML = houseInfo; // Set text content
          }

          if (displayHouseLocation.current) {
            displayHouseLocation.current.innerHTML = houseLocation;
          }
        }
      } catch (error) {
        document.body.innerHTML = "<h2>No house selected</h2>"; // Corrected way to insert HTML
      } finally {
        setloader(false);
      }
    };

    fetchHouse();
  }, []);
  const titleRef = useRef(null);
  // useEffect(() => {
  //  if (displayCardInfo) {
  //    titleRef.current.innerHTML = { houseInfo };
  //  }
  // })
  // if(loader) {
  //     return <div>Getting houses...</div>
  // }

  return (
    <>
      <Helmet>
        <title ref={titleRef}> House Descriptions | KEEV</title>
        <meta name="description" content="House Description Page" />
      </Helmet>
      <div className="propertyContainer">
        <div className="main">
          <div className="icon_Back">
            <img src={backlink} id="backLink" onClick={backLinkNav} alt="" />
          </div>
          <div className="propetyHead">
            <h2 style={{ margin: "20px 0" }}>House Descriptions</h2>
          </div>
          <div className="cardFeatured">
            <img alt="" ref={displayImg} />
            <div
              className="cardInfo"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}>
              <div
                className="housedetails"
                ref={displayCardInfo}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  fontWeight: "bold",
                }}>
                <p>
                  {" "}
                  <strong> </strong>
                </p>
                <p>
                  <strong></strong>
                </p>
              </div>
              <div
                className="houseLocation"
                ref={displayHouseLocation}
                style={
                  {
                    // padding: "10px 0"
                  }
                }>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
          <h2 style={{ textAlign: "center", margin: "30px 0" }}>Feautures</h2>
          <div className="buyButton">
            <button id="buyButton" onClick={buyMessage}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseDescription;