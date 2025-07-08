import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import backlink from "../assets/backlink.svg";
import "./PropertyPage.css";

const HouseDescription = () => {
  const navigateBack = useNavigate();
  const location = useLocation();
  const house = location.state?.house;

  const backLinkNav = () => {
    navigateBack("/Services");
  };

  if (!house) return <p>No house data provided.</p>;

  return (
    <>
      <div className="propertyContainer">
        <div className="icon_Back">
          <img src={backlink} id="backLink" onClick={backLinkNav} alt="Back" />
        </div>
        <div className="propertyHead">
          <h2>House Descriptions</h2>
          <div className="houseContainer">
            <img src={house.image} alt={house.name} style={{ width: "100%" }} />
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
                <p>
                  <b>{` ${house.name} is a ${house.description}`}</b>
                </p>
              </div>
            </div>
            <div className="mainFeature">
              <h2>Features</h2>
              <div className="features">
                {house.features?.map((feature, index) => (
                  <span key={index} className="feature-item">
                    {feature}
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "rgba(0, 121, 107, 1)", margin: "0 7px" }}></i>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseDescription;
