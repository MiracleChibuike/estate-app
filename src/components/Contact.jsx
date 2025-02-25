import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./Contact.css";

const Contact = () => {
  return (
    <>
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
                    <input type="text"  />
                </div>
                <div className="formEmail">
                    <label htmlFor="email">Email</label>
                    <input type="email" />
                </div>
                <div className="formMessage">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                <div className="submit">
                    <button type="submit">Submit Response</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
