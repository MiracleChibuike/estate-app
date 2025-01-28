import React from "react";
import "./Footer.css";

const Footer = () => {

return (
  <>
    <div className="footer">
      <div className="footerNavs">
        <div className="footerArrange">
          <div className="logoFooter">
            <h2>KEEV</h2>
            <p>Best service, best rates.</p>
            <br />
            <small>© Copyright 01 Inc.</small>
          </div>
          <div className="footerLinks">
            <div className="about">
              <strong>About</strong>
              <ul>
                <li>Our Story</li>
                <li>Our Team</li>
                <li>Resources</li>
              </ul>
            </div>
            <hr />
            <div className="support">
              <strong>Support</strong>
              <ul>
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Help Center</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <hr />
            <div className="social">
              <strong>Our Social</strong>
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter (X)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);


};

export default Footer