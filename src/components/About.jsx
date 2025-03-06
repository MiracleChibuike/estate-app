import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Nav from "./Nav";
import "./About.css";
import vision from "../assets/vision.svg";
import vision2 from "../assets/vision2.svg";
import mission from "../assets/mission.svg";
import lastmission from "../assets/lastmission.svg"
import AboutHomeImage from "../assets/AboutHomeImage.svg"


const About = () => {


    return (
      <>
        <Helmet>
          <title>Learn About Us - KEEV</title>
          <meta
            name="description"
            content="Learn about our goals, achievments and more "
          />
          <meta name="keywords" content="About KEEV" />
        </Helmet>
        <Nav />
        <div className="aboutContainer">
          <div className="aboutHome">
            <h2 className="homeTitle">
              Turning Dreams Into Reality, One Home at a Time."
            </h2>
            {/* <link rel="preload" as="image" href={AboutHomeImage} type="image/svg" style={{width: "100vh"}} /> */}
          </div>
          {/* About Container Text */}
          <div className="aboutTxt">
            <h2>About Us</h2>
            <div className="abt-info">
              <p>
                {" "}
                Founded in 2020 KEEV’S has been dedicated to helping clients
                find their dream homes with personalized, expert service.Over
                the years, we’ve built a reputation for integrity and
                reliability in the ever-evolving real estate market. Today,We
                continue to offer top-tier real estate solutions, guided by our
                core values of trust, commitment, and excellence.At KEEV’S Real
                Estate Company. We believe that real estate is more than just
                property it's about creating the foundation for your dreams.
                With years of experience in the industry, our team is dedicated
                to helping you navigate the world of buying, selling, and
                investing with ease and confidence.Whether you're a first-time
                homebuyer, a seasoned investor, or looking to sell your property
                for top value, we offer personalized service tailored to meet
                your unique needs. Our commitment to integrity, professionalism,
                and excellence drives us to deliver results that exceed
                expectations, every time. Let us help you unlock the door to
                your next chapter.
              </p>
            </div>
          </div>
          {/* Mission Div */}
          <div className="missionDiv">
            <div className="missionDetail">
              <div className="mission-info">
                <h2>Our Mission & Vision</h2>

                <p>
                  Our mission and Visionis to provide exceptional real estate{" "}
                  services by offering personalized guidance, expert market{" "}
                  <br />
                  insights, and a commitment to integrity. We strive to make
                  every real estate transaction seamless and stress-free, <br />
                  helping our clients find their perfect property while building{" "}
                  lasting relationships. Through innovation, professionalism,{" "}
                  and dedication, we aim to be the trusted partner for all your{" "}
                  <br />
                  real estate needs. lasting relationships. Through innovation,
                  professionalism, insights, and a commitment to integrity. We
                  strive to make every real estate transaction seamless and
                  stress-free, <br />
                </p>
              </div>
              <div className="img-info">
                <img src={mission} alt="" />
                <img src={vision2} alt="" />
                <img src={lastmission} alt="" />
                <img src={vision} className="Vst-Last" alt="" />
              </div>
            </div>
          </div>
          {/* Journey Div */}
          <div className="Journey">
            <h2>
              Our Journey <span>So Far</span>
            </h2>
            <div className="journey_Info">
              <p>
                Keev Real Estate was founded in 2021 with a mission to provide
                exceptional real estate services and build lasting relationships
                with clients. In our early years, we focused on creating a solid
                foundation, offering personalized guidance to buyers and
                sellers, which quickly earned us a loyal client base. By 2023,
                we expanded our services to include commercial real estate and
                embraced new technologies to stay ahead of industry trends. This
                allowed us to enhance our digital presence and better serve our
                clients with innovative solutions. As we approach 2024, Keev
                Real Estate is proud of our rapid growth, and we remain
                committed to delivering excellence in every aspect of the real
                estate experience.
              </p>
            </div>
          </div>
        </div>
      </>
    );

};

export default About;