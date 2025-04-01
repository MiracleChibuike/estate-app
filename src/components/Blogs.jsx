import React from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Blogs.css";
import Nav from "./Nav";
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
              src="https://s3-alpha-sig.figma.com/img/eacb/6973/d565a23e3abef0c0587b68ad8b0f8821?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YeAJnpdOoofcJZr6UUmTkLc5lkhy4CKuMOUBHXWf4TIPAFY2I-1Ude-vrobAMdgANYXeowHRS00bhoCnbeRQCRn~NrCkgm9AqRwhcFNBwOjY6kD~UJEOxIp2BW602I0Ok1Rinupzmzl0hYy89HWBAU2eLaD26ZO-CXIqUE5fNHMWyMYnd4NweCQKKHWWYH8sqWDQt2Zr2tQVw065idkpS85OTWABOmanNmDrgJN~-Q6-rDnrMp0-Wk6kwt5wWcSTEGiLx4A3LDYB~ndHBe5tlKKDjB6cJoaeQ2sEms6LbRhbwLS4iyUrVrZZ2c-KnHZKak6NhjCHQZ-vCNmta32TLA__"
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
              <img
                src="https://s3-alpha-sig.figma.com/img/f1ef/bdc4/c0d7c130b083833dc9a03aaa34dab3d8?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=soOk3CaOp~fuDZDK2cCw3bqOnEEPd09uqBj4r-ABeRqBjbw0RP4auycCKk9enw-clYIQxeGiTKlODJVr~mkGyHxcI401SCUOyXm5lwlRRkRvbWPsI3u4rskNrpQPfKwOV4-jZQjirScZHZg6EciP1WEt~9xJVFNF3RmAW9OIzv-7jEgNn7MevTvd7VCSC2RZug531mpGbMBPWZJRitn-aXUxIV8BXSJArj2G6TPCZSYyGGOyHQvvrKz4hFrbjMgu4NMmIXIMFghpsmjDr9T3PmrSz2u5k5aknEPIsxyDUd01wMsF0zegWCkOnGXuTtvH99R3eGfP~gToTKeW6DZ52A__"
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
                src="https://s3-alpha-sig.figma.com/img/ace2/ae72/0a494cca8bba6bcf3121c4709363532e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BKNt2xgIEwLlrWin4nfjE1EhFWt6y1S1pvsqXTgQ5sXh4At5yXzHO6aSGy0-2vhfYx6QgAAyj2zMgV7zqXyRuwOrEq680Oj7EIeRj~19e6W-XXLU-JLpd6FoxMjw7nEPelOo2Rq6hbSsm7siaF4pNUgMF50F~nFVzDhAC6ak6Z2XZ7Gj33Lo~yIfct1Kgvl~LTeK76xr0D4AsiYmXg9y73I4qRFroqon9DCp5ojtum5UDTkKVB8-wkZZr4-EwjtD6iOFpgg1z3h15cy1fozt-sqaFDFklLhtMqA~xrSXQ3mEf-6Cfkq2i2fbB04fxXZsUjOhYZZUo8A9iy-jnLMYeA__"
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
              <img
                src="https://s3-alpha-sig.figma.com/img/05ed/78de/85f172ee4cd6b803b613a317948b5f95?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kc1x9mVKsGQuj0ECHJwYWPUpOoMj0wvzLxKhJS8oKMSrSG1xBZ0L4oJP1j-XZTDWW2iI3-mLa8yBUSkbpzQes2EoTb06RGZ~1rqdvxNlynyedeUzwMTFLHLzunwdfPwF4J1DsCezo1bSnVkHOD~J6rX~llpBDWzgkbz86n-n603Cb40loCKLN6D4cQDncNzkrTT8mYgEmsrM9Fgk~~QzgWQWpAwdUkgII0A91sXOvFdycGjPsGJgILtn508vglw3jjFihilSTWr~mrjt~PgpWxe-KiLnYO9BK0SacMEDfl5sdyQdugYypgMk~EA9U-2-T1Lx-oK4V7gFSQXGAeaD1w__"
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
               
                src="https://s3-alpha-sig.figma.com/img/12ae/77b0/74f934182f097506d4eebe98293e2dc3?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nARAljKeDWucprLPjIsMWqcRjrmhlDrQqsQG0YYH90IAFCuozprggEav1jv6H~8F~PipnKWw92MPHJ7PHKWKDWE9Cit2nPGhWKT5KkLNVbevhP3KevYqQLa6BsNV1gVRJ7G5XoFSJoRQphIajbhKbt7QX~sY9v6XeRG88z48d~vJKSPbHJWywWofGHYKdjUcyhDKcS~Pabwk5EhoncxtakZ0tSYP2LewONVgliT1Y5k930vP2WV7PWEJMLUdCNjpjDaF8~5vCcNDu~QC3JegPB-fPVQEg878hA4-5mOvbgm317386oXHG0HyCHpjXGGVaV9Y~A8c6yibMcn8kfxqsA__"
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
        </div>
      </div>
    </>
  );
};

export default Blogs;
