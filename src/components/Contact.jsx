import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./Contact.css";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | KEEV</title>
        <meta name="description" content="Contact page" />
      </Helmet>
      {/* Container for Contact */}
      <div className="contact-Container">
        <Nav />
        <div className="contact">
          <div className="headerContact">
            <h2 id="contact_header">Get in Touch</h2>
          </div>
          {/* Contact Form */}
          <div className="contactForm">
            <form action="" method="get" autoComplete="on">
              <div className="formName">
                <label htmlFor="name">Name</label>
                <input type="text" />
              </div>
              <div className="formEmail">
                <label htmlFor="email">Email</label>
                <input type="email" />
              </div>
              <div className="formMessage">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"></textarea>
              </div>
              <div className="submit">
                <button type="submit">Submit Response</button>
              </div>
            </form>
          </div>
        </div>
        {/* Maps */}
        <div className="maps" style={{ margin: "40px 0" }}>
          <h2 className="text-center" style={{margin: "40px 0"}}>Find us on the map</h2>
          <iframe style={{ border: "0",
                          width: "100%",
           }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31771.760863061198!2d7.047900712927754!3d5.496984665552462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10425840f781e335%3A0xbe83d6748072c601!2sIkenegbu%2C%20Owerri%2C%20Imo!5e0!3m2!1sen!2sng!4v1742825426572!5m2!1sen!2sng"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
