import React from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Blogs.css";
import Nav from "./Nav";
import blogHome from "../assets/blogs/blogHome.svg"
import fBlog from "../assets/blogs/fBlog.svg";
import secondBlog from "../assets/blogs/secondBlog.svg";
import tBlog from "../assets/blogs/tBlog.svg";
import fourthBlog from "../assets/blogs/fourthBlog.svg";
import fifthBlo from "../assets/blogs/fifthBlo.svg";
import lastBlog from "../assets/blogs/lastBlog.svg";
import Footer from "./Footer";

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Our Blogs | KEEV</title>
        <meta name="description" content="Our Blogs" />
        <meta name="keywords" content="Read up our blogs" />
      </Helmet>
      {/* Blogs Container */}
      <div className="blogsContainer">
        <Nav />
        <div className="blogs-home-page">
          <div className="blog-Text">
            <h2 style={{ fontWeight: "bold" }}>The Best Info At A Click</h2>
            <p style={{ lineHeight: "30px" }}>
              Our blog has the best articles to teach you everything you <br />
              need to know about the property <br /> market
            </p>
            <button>Read Now</button>
          </div>
          <div className="blog-img">
            <img
              id="blog-img"
              style={{}}
              loading="lazy"
              src={blogHome}
              alt="blog"
            />
          </div>
        </div>
        <div className="features">
          <h2 className="text-center" style={{ fontWeight: "bold" }}>
            Featured Articles
          </h2>
          <div className="blogPosts">
            <div className="post">
              <img src={fBlog} loading="lazy" fetchPriority="high" alt="" />
              <p
                style={{
                  fontWeight: "600",
                  margin: "15px 0",
                  fontSize: "1.4rem",
                }}>
                <strong>The Role of Agents in Property Business</strong>
              </p>
              <p>
                In the property business, the agent is perhaps the most
                important party. Serving as the middle man between tthe
                interested partues, he is crucial to a successful deal
              </p>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  color: "var(--clr-logo)",
                }}>
                <strong>Read More</strong>
              </button>
            </div>
            {/* Post 2 */}
            <div className="post">
              <img
                src={secondBlog}
                loading="lazy"
                fetchPriority="high"
                alt=""
              />
              <p
                style={{
                  fontWeight: "600",
                  margin: "15px 0",
                  fontSize: "1.4rem",
                }}>
                <strong>5 Common Mistakes Real Estate Investors Make</strong>
              </p>
              <p>
                Thinking of diving into real estate investment? Avoid costly
                pitfalls with this guide to the most frequent mistakes beginners
                make, from miscalculating cash flow to neglecting market
                research. Learn actionable tips to ensure your first investment
                is a success.
              </p>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  color: "var(--clr-logo)",
                }}>
                <strong>Read More</strong>
              </button>
            </div>
            {/* Post 3 */}
            <div className="post">
              <img src={tBlog} loading="lazy" fetchPriority="high" alt="" />
              <p
                style={{
                  fontWeight: "600",
                  margin: "15px 0",
                  fontSize: "1.4rem",
                }}>
                <strong>The Power of Location</strong>
              </p>
              <p>
                Explore why location is crucial in today's market and how
                factors like infrastructure, demographics, and local amenities
                can make or break your investment.
              </p>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  color: "var(--clr-logo)",
                }}>
                <strong>Read More</strong>
              </button>
            </div>

            {/* Post 4 */}
            <div className="post">
              <img
                src={fourthBlog}
                loading="lazy"
                fetchPriority="high"
                alt=""
              />
              <p
                style={{
                  fontWeight: "600",
                  margin: "15px 0",
                  fontSize: "1.4rem",
                }}>
                <strong>Identifying High-Potential Properties</strong>
              </p>
              <p>
                In the property business, the agent is perhaps the most
                important party. Serving as the middle man between tthe
                interested partues, he is crucial to a successful deal
              </p>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  color: "var(--clr-logo)",
                }}>
                <strong>Read More</strong>
              </button>
            </div>
          </div>
          <h2
            className="text-Center"
            style={{ margin: "30px 0", textAlign: "center" }}>
            Today's Spotlight
          </h2>
          <div className="spotlight">
            {/* Post 5 */}
            <div className="post">
              <img src={fifthBlo} loading="lazy" fetchPriority="high" alt="" />
              <p
                style={{
                  fontWeight: "600",
                  margin: "15px 0",
                  fontSize: "1.4rem",
                }}>
                <strong>An Overnight Millionaire</strong>
              </p>
              <p>
                Lisa Ann, a nurse and mother of two, entered real estate with
                KEEV's support. After investing $80,000 in September 2023, her
                property is now worth $2 million—an inspiring story of
                education, connections, and smart investing.
              </p>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  color: "var(--clr-logo)",
                }}>
                <strong>Read More</strong>
              </button>
            </div>
            {/* last Blog */}
            <div className="post">
              <img src={lastBlog} loading="lazy" fetchPriority="high" alt="" />
              <p
                style={{
                  fontWeight: "600",
                  margin: "15px 0",
                  fontSize: "1.4rem",
                }}>
                <strong>Slow And Steady</strong>
              </p>
              <p>
                Alex, a first-time investor, transformed an overlooked suburban
                property into a success through strategic vision and bold
                renovations. Learn from the challenges he overcame and the smart
                decisions that led to his impressive real estate win.
              </p>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  color: "var(--clr-logo)",
                }}>
                <strong>Read More</strong>
              </button>
            </div>
          </div>
          {/* News Letter */}
          <div className="newsLetter">
            <h2>Subscribe to our Newsletter</h2>
            <div className="newsLetterDiv">
              <div className="newsLetterText">
                <p>
                  Stay up to date with the latest news, trends, and offers in
                  the real estate industry.
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
