import Nav from "./Nav";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import home from "../assets/home.svg";
import more from "../assets/more.svg";
import houseA from "../assets/houseA.svg";
import agents from "../assets/agents.svg";
import completed from "../assets/completed.svg";
import awards from "../assets/awards.svg";
import chatbot from "../assets/chatbot.svg";
import clock from "../assets/clock.svg";
import prices from "../assets/prices.svg";
import expert from "../assets/expert.svg";
import california from "../assets/california.svg";
import beverly from "../assets/beverly.svg";
import newyork from "../assets/newyork.svg";
import client from "../assets/client.svg";
import client2 from "../assets/client2.svg";
import client3 from "../assets/client3.svg";
import star from "../assets/star.svg";
import clientSerah from "../assets/clientSerah.svg";
import maleUserClient from "../assets/maleUserClient.svg";
import lastClient from "../assets/lastClient.svg";
import "./Home.css"
import Footer from "./Footer";
const Home = () => {
  const navigate = useNavigate();

  const navigateFooter = () => {
    navigate("/footer");
  };

  // Active Link

  // Add Active Link
  const addLink = () => {
    if (homeText) {
      homeText.classList.add("activeLink");
    }
  };

  document.addEventListener("DOMContentLoaded", addLink);

  // Prevent Image Dragging
  let image = null

  useEffect(() => {
      image = document.querySelectorAll("img");
      console.log(image)
  }, []);

  const CheckImg = () => {
    image.forEach((img) => {
      img.addEventListener("mousedown", (event) => {
        event.preventDefault();
      });
      img.addEventListener("contextmenu", (event) => {
        event.preventDefault();
      });
    });
  };


  document.addEventListener("DOMContentLoaded", CheckImg)
  // Load an Animation on page Load
  const headerRef = useState(null);
  const bodyContainer = useState(null)
    useEffect(() => {
          const loadAnimation = () => {
            setTimeout(() => {
              headerRef.current.style.display = "none"
              bodyContainer.current.style.display = "block"
            }, 3000)
          };
          loadAnimation();
    }, [])

  return (
    <>
      <header id="headertag" ref={headerRef}>
        <span className="loader"></span>
      </header>
      <div ref={bodyContainer} className="edit">
        <Nav />
        <div className="HomeContainer">
          <div className="HomeText">
            <h2>
              Find Your Perfect Dream <br /> House with us
            </h2>
            <p className="HomeInfo">
              Explore our magnificent buildings, crafted with unparalleled
              attention to detail and exceptional design. Each structure is a
              masterpiece that harmoniously blends luxury, functionality, and
              style. Our homes are meticulously tailored to bring your unique
              dream vision to life, offering bespoke features that reflect your
              personality and preferences. Whether you're looking for a serene
              escape from the hustle and bustle of city life or a vibrant
              community to call home, Keev Luxurious Estates offers a wide range
              of premium properties designed with you and your family's
              happiness in mind.
            </p>
          </div>
          <div className="homeImgs">
            <img src={home} alt="" id="homeImage" />
          </div>
        </div>
        <div className="helpInfo">
          <div className="moreImg">
            <img src={more} alt="" id="moreImage" />
          </div>
          <div className="moreText">
            <h2>
              We Help You To Find Your <br /> Perfect Home
            </h2>
            <p className="moreInfo">
              At Keev Luxurious Estates, we take pride in providing a seamless
              and enjoyable experience as you embark on the journey to finding
              your dream home. Our dedicated team of experts is here to guide
              you every step of the way, offering personalized support tailored
              to your unique preferences and needs. We specialize in creating
              homes that reflect elegance, comfort, and sophistication, ensuring
              every detail is meticulously crafted to perfection. Whether you're
              looking for a serene escape from the hustle and bustle of city
              life or a vibrant community to call home, Keev Luxurious Estates
              offers a wide range of premium properties designed with you and
              your family's happiness in mind.
            </p>
          </div>
        </div>
        <div className="ratings">
          <div className="ratingsDiv">
            <div>
              <img src={houseA} alt="" />
              <p>8K+</p>
              <p>
                <strong>Houses Available</strong>
              </p>
            </div>
            <div>
              <img src={houseA} alt="" />
              <p>9K+</p>
              <p>
                <strong>Houses Sold</strong>
              </p>
            </div>
            <div>
              <img src={agents} alt="" />
              <p>5K+</p>
              <p>
                <strong>Trusted Agents</strong>
              </p>
            </div>
            <div>
              <img src={completed} alt="" />
              <p>6K+</p>
              <p>
                <strong>Completed Projects</strong>
              </p>
            </div>
            <div>
              <img src={awards} alt="" />
              <p>4K+</p>
              <p>
                <strong>Awards Won</strong>
              </p>
            </div>
          </div>
        </div>
        {/* Why Choose US */}
        <div className="chooseUs">
          <h2 className="chooseHeading">Why Choose Us</h2>
          <div className="chooseDiv">
            <div className="expert">
              <img src={expert} alt="" />
              <div>
                <p>
                  <strong className="caption">Experte Guidance</strong>
                </p>
                <p>
                  Benefit from our team's seasoned expertise for a smooth buying
                  experience
                </p>
              </div>
            </div>
            <div className="prices">
              <img src={prices} alt="" />
              <div>
                <p>
                  <strong className="caption">Available Prices</strong>
                </p>
                <p>
                  Our services that adapt to your unique needs comes with very
                  affordable and pocket friendly prices
                </p>
              </div>
            </div>
            <div className="Availability">
              <img src={clock} alt="" />
              <div>
                <p>
                  <strong className="caption">Availability</strong>
                </p>
                <p>
                  Our customers can always stay informed with us as we are
                  always available round the clock
                </p>
              </div>
            </div>
            <div className="ChatBot">
              <img src={chatbot} alt="" />
              <div>
                <p>
                  <strong className="caption">Support</strong>
                </p>
                <p>
                  Providing peace of mind with our responsive and attentive
                  customer service
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Popular Residences */}
        <div className="popular">
          <h2 className="popularHead">Our Popular Residences</h2>
          <div className="popularDiv">
            <div className="popularCard">
              <img src={california} alt="" />
              <div className="cardInfo">
                <p>
                  <strong>san Francisco, California</strong>
                </p>
                <p>$2,500,000</p>
              </div>
            </div>
            <div className="popularCard">
              <img src={beverly} alt="" />
              <div className="cardInfo">
                <p>
                  <strong>Beverly Hills, California</strong>
                </p>
                <p>$4,500,000</p>
              </div>
            </div>
            <div className="popularCard">
              <img src={newyork} alt="" />
              <div className="cardInfo">
                <p>
                  <strong>New York, USA</strong>
                </p>
                <p>$6,500,000</p>
              </div>
            </div>
          </div>
        </div>
        {/* What Our Clients Say */}
        <div className="clientsComment">
          <h2 className="clientsHeading">What Our Clients Say</h2>
          <div className="clientsRecordDiv">
            <div className="clientsDiv">
              <div className="clientCard">
                <img src={client} id="client" alt="" />
                <div className="clientDetails">
                  <div className="clientInfo">
                    <div className="clientContact">
                      <img id="clientImage" src={clientSerah} alt="" />
                      <div className="clientName">
                        <p>
                          {" "}
                          <strong>Sarah Nguyen</strong>
                        </p>
                        <p className="locationClient">San Francisco</p>
                      </div>
                    </div>
                    <div className="clientRating">
                      <button>
                        <img src={star} alt="" />
                        <span>
                          <strong>5.0</strong>
                        </span>
                      </button>
                    </div>
                  </div>
                  <p className="clientComment">
                    Keev truly cares about their clients. They listened to my
                    needs and preferences and helped me find the perfect home in
                    the Bay Area. Their professionalism and attention to detail
                    are unmatched.
                  </p>
                </div>
              </div>
              {/* card 2 */}
              <div className="clientCard">
                <img src={client2} id="client2" alt="" />
                <div className="clientDetails">
                  <div className="clientInfo">
                    <div className="clientContact">
                      <img id="clientImage" src={maleUserClient} alt="" />
                      <div className="clientName">
                        <p>
                          {" "}
                          <strong>Michael Rodriguez</strong>
                        </p>
                        <p className="locationClient">New York</p>
                      </div>
                    </div>
                    <div className="clientRating">
                      <button>
                        <img src={star} alt="" />
                        <span>
                          <strong>5.0</strong>
                        </span>
                      </button>
                    </div>
                  </div>
                  <p className="clientComment">
                    I had a fantastic experience working with Keev. Their
                    expertise and personalized service exceeded my expectations.
                    I found my dream home quickly and smoothly. Highly
                    recommended!
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="clientCard">
                <img src={client3} id="client3" alt="" />
                <div className="clientDetails">
                  <div className="clientInfo">
                    <div className="clientContact">
                      <img id="clientImage" src={lastClient} alt="" />
                      <div className="clientName">
                        <p>
                          {" "}
                          <strong>Emily Johnson</strong>
                        </p>
                        <p className="locationClient">Los Angeles</p>
                      </div>
                    </div>
                    <div className="clientRating">
                      <button>
                        <img src={star} alt="" />
                        <span>
                          <strong>5.0</strong>
                        </span>
                      </button>
                    </div>
                  </div>
                  <p className="clientComment">
                    Keev made my dream of owning a home a reality! Their team
                    provided exceptional support and guided me through every
                    step of the process. I couldn't be happier with my new home!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* News Letter */}
        <div className="newsLetter">
          <h2 onClick={navigateFooter}>Subscribe to our Newsletter</h2>
          <div className="newsLetterDiv">
            <div className="newsLetterText">
              <p>
                Stay up to date with the latest news, trends, and offers in the
                real estate industry.
              </p>
            </div>
            <div className="newsLetterInput">
              <form action="">
                <input
                  type="text"
                  placeholder="Enter your email"
                  id="inputNews"
                  name="Email"
                />
                <button type="submit" id="subscribeBtn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Return Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Home