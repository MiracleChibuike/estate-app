import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./Contact.css";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import axios from "axios";
import emailjs from "emailjs-com";

const Contact = () => {

  // Loading Animation states
  // const [loader, setLoader] = useState(false);
  const bodyContent = useRef(null);
  const loaderAnim = useRef(null)
  // Validate Modal toggling
     const [isModalVisible, setIsModalVisible] = useState(false);
    //  Validate Error Toggling
    const [isErrorVisible, setIsErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isFormFilled, setIsFormFilled] = useState(false);
    const errorContent = useRef(null);
    const updateErrorContent = errorContent.current;
     const modalShow = useRef(null);
     const modalIcon = useRef(null);
     const formHandler = useRef(null);
     const contactName = useRef(null);
     const contactEmail = useRef(null);
     const contactMessage = useRef(null);

     // Validate Form and Send Email
     const valForm = () => {
       let isValid = true;
       const allFilled = [contactEmail, contactName, contactMessage];

       // Check if all fields are filled
       allFilled.forEach((field) => {
         if (field.current.value.trim() === "") {
           field.current.style.outline = "3px solid #ddaaaa";
           isValid = false;
         } else {
           field.current.style.outline = "2px solid #ccc";
         }
       });

       if (!isValid) {
         setIsFormFilled(true);
         setTimeout(() => {
          setIsFormFilled(false)
         }, 5000)
         return false;
       }

       // If valid, send email
       sendEmail();
       return isValid;
     };

     // Function to send email using EmailJS
     const sendEmail = () => {
       const form = formHandler.current;
       emailjs
         .sendForm(
           "service_vb3crwp", // My service ID
           "template_w56qs5r", // My template ID
           form, // The form element
           "HsZSbeZEi3KERFFS6" // My user ID
         )
         .then(
           (response) => {
             console.log("Message sent:", response);
             setIsModalVisible(true); // Show modal
            //  if (setIsModalVisible) {
            //   modalShow.current.scrollIntoView({ behavior: "smooth"})
            //  }
             form.reset(); // Optionally reset the form after successful submission
           },
           (error) => {
             console.error("Error sending message:", error);
             setIsErrorVisible(true);
            //  console.log(updateErrorContent.textContent = "hello can work")
             setErrorMessage(`There was an error sending your message: Response status returned  "${error.status}" \n Try checking your internet connection and try again.`);
            //  alert("There was an error sending your message.");
           }
         );
     };

     // Effect for handling form submit event
     useEffect(() => {
       const formElement = formHandler.current;

       const submitHandler = (e) => {
         e.preventDefault(); // Prevent the default form submission
         if (valForm()) {
           // Only proceed with sending email if the form is valid
         }
       };

       formElement.addEventListener("submit", submitHandler);

       // Cleanup to avoid multiple event listeners
       return () => {
         formElement.removeEventListener("submit", submitHandler);
       };
     }, []);

     // Close the modal
     const closeModal = () => {
       setIsModalVisible(false);
     };

    //  Close the Error Modal 
    const closeErrorModal = () => {
      setIsErrorVisible(false);
    }

    useEffect(() => {
          // setLoader(true);
          const loadreShow = () => {
            // loaderAnim.current.style.display = "block";
            // bodyContent.current.style.display = "none";
            setTimeout(() => {
                  loaderAnim.current.style.display = "none";
                  bodyContent.current.style.display = "block";
            }, 4000)
          };

          loadreShow();
        
    }, [])



  return (
    <>
      <Helmet>
        <title>Contact Us | KEEV</title>
        <meta name="description" content="Contact page" />
      </Helmet>
      {/* Loadre Animation Container */}
      <div id="headerShow" ref={loaderAnim}>
        <span id="loader"></span>
      </div>
      {/* Container for Contact */}
      <div className="contact-Container" ref={bodyContent}>
        <Nav />
        <div className="contact">
          <div className="headerContact">
            <h2 id="contact_header">Get in Touch</h2>
          </div>
          {/* Contact Form */}
          <div className="contactForm">
            {/* Error message when form field isn't filled */}
            {isFormFilled && (
              <div className="errorDisplay">
                <p>
                  {" "}
                  <i class="fa-solid fa-triangle-exclamation"></i> Please
                  fill all fields
                </p>
              </div>
            )}
            <form
              ref={formHandler}
              action="https://getform.io/f/bxowndea"
              method="POST"
              autoComplete="on">
              <div className="formName">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" ref={contactName} />
              </div>
              <div className="formEmail">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" ref={contactEmail} />
              </div>
              <div className="formMessage">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  ref={contactMessage}></textarea>
              </div>
              <div className="submit">
                <button type="submit">Submit Response</button>
              </div>
            </form>
          </div>
        </div>
        {/* Contact-Modal */}
        {isModalVisible && (
          <div className="modal_Contact" ref={modalShow}>
            <div className="content">
              <p>
                {" "}
                <i
                  className="fa-solid fa-xmark"
                  ref={modalIcon}
                  onClick={closeModal}></i>
              </p>
              <p>Message sent successfully! We will get back to you soon.</p>
            </div>
          </div>
        )}
        {/* Error message to show once an error occurs while sending form */}
        {isErrorVisible && (
          <div className="displayError">
            <div className="content">
              <p>
                {" "}
                <i className="fa-solid fa-xmark" onClick={closeErrorModal}></i>
              </p>
              {errorMessage && <p>{errorMessage}</p>}
            </div>
          </div>
        )}
        {/* Maps */}
        <div className="maps" style={{ margin: "40px 0" }}>
          <h2 className="text-center" style={{ margin: "40px 0" }}>
            Find us on the map
          </h2>
          <iframe
            style={{ border: "0", width: "100%" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31771.760863061198!2d7.047900712927754!3d5.496984665552462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10425840f781e335%3A0xbe83d6748072c601!2sIkenegbu%2C%20Owerri%2C%20Imo!5e0!3m2!1sen!2sng!4v1742825426572!5m2!1sen!2sng"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
