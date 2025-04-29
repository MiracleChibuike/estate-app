import React from "react";
import { useEffect, useRef } from "react";
import "./Agents.css";
import { Helmet } from "react-helmet-async";
import Nav from "./Nav";


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
              <p style={{fontWeight: "600",
                        lineHeight: "100%",
                        fontSize: "1.2rem"
              

              }}>We are always here to serve you anytime.</p>
            </div>
            <div className="agents-home-img"></div>
          </div>
        </div>
      </>
    );


};


export default Agents;