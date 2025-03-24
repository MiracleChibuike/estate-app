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
    houseName.current.style.display = "block";
    // Scroll to the housename Container
    houseName.current.scrollIntoView({ behavior: "smooth" });
    // Add a dark shadow to the body when the modal is open
    document.body.style.background = "rgba(31, 30, 30, 0.4)";
  };
 

  const modal_Close = useRef(null);
  const modal_Close2 = useRef(null);

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

  // To be able to show a message after a succesful message recieival instead of alert
  const message_Success = useRef(null);
  const message_Success_Close = useRef(null);


  // Show House Informations on alert Trigger
  const houseName = useRef(null);
  const houseLocation = useRef(null);
  const eq_Form = useRef(null);
  const eq_Name = useRef(null);
  const eq_Email = useRef(null);
  const eq_textArea = useRef(null);

  useEffect(() => {
    eq_Form.current.addEventListener("submit", (e) => {
      e.preventDefault();

      const fields = [eq_Name, eq_Email, eq_textArea]; // Store all inputs in an array
      let allFilled = true;

      fields.forEach((field) => {
        if (field.current.value.trim() === "") {
          field.current.style.outline = "1px solid red"; // Highlight empty fields
          allFilled = false;
        } else {
          field.current.style.outline = "1px solid var(--clr-light-green)";
           // Reset filled fields (optional)
        }
      });

      if (!allFilled) {
        alert("Please fill all fields.");
        return;
      }
        // if (allFilled) {
        //   eq_Name.current.value = ""
        // }
      houseName.current.style.display = "none"
                message_Success.current.style.display = "block";
            setTimeout(() => {
                  message_Success.current.style.display = "none"
            }, 4000)
    });
  }, []);

    // Close the success Message
      useEffect(() => {
         const closeMessageSuccess_Content = () => {
          message_Success.current.style.display = "none"
         }
      })
      // Scroll Into View Function
  // useEffect(() => {
  //  if (displayCardInfo) {
  //    titleRef.current.innerHTML = { houseInfo };
  //  }
  // })
  // if(loader) {
  //     return <div>Getting houses...</div>
  // }

  useEffect(() => {
    modal_Close.current.addEventListener("click", () => {
      houseName.current.style.display = "none";
      document.body.style.background = "white";
    });
  });

  useEffect(() => {
    modal_Close2.current.addEventListener("click", () => {
      alert("Operation Cancelled. We hope you are going to come back again");
      houseName.current.style.display = "none";
    });
  });

 

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
              Send a Request
            </button>
          </div>
        </div>
        {/* Modal for a success Message Purchase */}
        <div className="success_purchase">
          <div
            className="msg-purchase-success shadow-lg p-3 mb-5 bg-body-tertiary rounded"
            ref={message_Success}>
            <p className="closeMesg-success" ref={message_Success_Close}>
              {" "}
              <i className="fa-solid fa-xmark"></i>
            </p>
            <p>Message sent succesfully... </p>
          </div>
        </div>
        {/* Modal for Buy */}
        <div
          className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"
          id="buy_Modal"
          ref={houseName}>
          <div className="modal_Container">
            <div className="modalClose">
              <button ref={modal_Close} id="closeMd" className="btn-secondary ">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <h2 className="modalTitle" style={{ textAlign: "center" }}>
              You're One Step Away from Your Dream Home
            </h2>
            <div className="form_Contents">
              <form
                ref={eq_Form}
                action="james@gmail.com"
                encType="plain"
                method="get"
                id="eq-form">
                <div class="mb-3">
                  <label for="email" className="form-label">
                    Email address
                  </label>
                  <input
                    ref={eq_Email}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Please Enter Your Email Address"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">
                    Name
                  </label>
                  <input
                    ref={eq_Name}
                    type="text"
                    className="form-control"
                    id="Name"
                    placeholder="Please Enter Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label for="enquiry" class="form-label">
                    Enquiry
                  </label>
                  <textarea
                    ref={eq_textArea}
                    className="form-control"
                    id="enquiry"
                    rows="3"
                    placeholder="Need more details? Type any further inquiry below."></textarea>
                </div>
                <ul>
                  {/* <li className="houseImage-buy">
                    <img alt="" />
                  </li> */}
                  {/* <li className="housename" ref={houseName}></li>
                  <li className="houseLocation-buy" ref={houseLocation}></li> */}
                </ul>
                <div className="buyNow">
                  <button type="submit" id="btn-toggle-p">
                    Confirm Purchase
                  </button>{" "}
                  <br />
                  <button
                    id="close-btn-purchase"
                    type="button"
                    ref={modal_Close2}>
                    Cancel Purchase
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseDescription;
