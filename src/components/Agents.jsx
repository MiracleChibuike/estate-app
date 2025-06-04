import React from "react";
import { useEffect, useRef } from "react";
import "./Agents.css";
import { Helmet } from "react-helmet-async";
import Nav from "./Nav";
import Sold from "../assets/agents/sold.svg"
import curveAgent from "../assets/agents/curveAgent.svg";
import curve2 from "../assets/agents/curve2.svg";
import curve3 from "../assets/agents/curve3.svg"

const Agents = () => {

    return (
      <>
        <Helmet>
          <title>Meet our Agents - Keev</title>
          <meta
            name="description"
            content="Meet our experts agents in action"
          />
          <meta name="keywords" content="keev, agents" />
        </Helmet>
        <div className="agentsContainer">
          <Nav />
          <div className="agents-home">
            <div className="agents-home-text">
              <h2>
                The Only Real Estate <br /> Agency You Will Ever <br /> Need
              </h2>
              <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                At KEEV, we pride ourselves on being <br /> a One-Stop-Shop for
                all things Real <br /> Estate,
                 with every service you need to <br /> ensure 
                maximum satisfaction and money's worth.
              </p>
            </div>
            <div className="agents-home-img">
              <div className="imgBar">
                <img
                  src="https://media.istockphoto.com/id/2198966747/photo/couple-closing-real-estate-contract-with-real-estate-agent.webp?a=1&b=1&s=612x612&w=0&k=20&c=MRupwwS_sR21cACmOIEPxd5ykbXbZsxLoc_oKUsaNhc="
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Services */}
          <div className="servicesA" style={{ margin: "50px 0" }}>
            <h2
              className="agentSHeadre"
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "700",
              }}>
              {" "}
              Our Services
            </h2>
            <div className="servicesCover">
              <div className="servicesPlaceholderImg">
                {/* <img src={curveAgent} alt="" /> */}
                <img id="soldAgent" src={Sold} alt="" />
              </div>
              <div className="services-info">
                <h2>Property Sales and Marketing</h2>
                <br />
                <p>
                  At KEEV Real Estate Company, our Property Sales and Marketing{" "}
                  <br />
                  service is designed to maximize your property's value and
                  visibility. <br /> We start with a precise valuation and
                  in-depth market analysis to <br /> ensure competitive pricing
                  that attracts buyers while optimizing <br /> returns. Our
                  tailored marketing strategies feature high-quality <br />{" "}
                  visuals—professional photography, drone footage, and virtual
                  tours <br />
                  —to showcase your property's best features. We leverage top
                  real <br /> estate platforms, targeted social media campaigns,
                  and traditional <br /> media to reach the right audience.{" "}
                </p>
                <div className="btn">
                  <button>Learn More</button>
                </div>
              </div>
            </div>
            {/* Cover 2 */}
            <div className="cover2">
              <div className="coverImg">
                <img src={curve2} id="consultAgent" alt="" />
              </div>
              <div className="coverInfo" style={{ rotate: "-180deg" }}>
                <h2>Real Estate Investment Consulting</h2>
                <p>
                  KEEV Real Estate Company offers expert Investment Consulting{" "}
                  <br />
                  services to help you navigate the real estate market
                  confidently. <br />
                  We provide in-depth market analysis, risk assessment, and
                  personalized <br /> investment strategies tailored to your
                  goals. Our team identifies <br /> lucrative opportunities,
                  conducts feasibility studies, and advises on <br /> portfolio
                  growth to maximize returns.{" "}
                </p>
                <div className="btn">
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );


};


export default Agents;