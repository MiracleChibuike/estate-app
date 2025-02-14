import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import backlink from "../assets/backlink.svg";
import "./Dashboard.css";
import user from "../assets/user.jpg";
import Camera from "../assets/Camera.svg"

const Profile = () => {
          const navigateBack = useNavigate();
          const backLinkNav = () => {
            navigateBack("/Dashboard");
          };

const fileInput = useRef(null);
const userImage = useRef(null);
const cameraIcon = useRef(null)

   useEffect(() => {
             fileInput.current.addEventListener("change", (event) => {
                const files = event.target.files[0];
                if (files) {
                    const reader = new FileReader();
                    reader.onload = ((e) => {
                        userImage.current.src = e.target.result;
                        localStorage.setItem("userProfile", userImage.current.src)
                    })
                                    reader.readAsDataURL(files);

                };
             });
   }, []);

  useEffect(() => {
     cameraIcon.current.addEventListener("click", () => {
       fileInput.current.click();
     });
  });

   useEffect(() => {
     const getUserImage = localStorage.getItem("userProfile");
     if (getUserImage) {
       userImage.current.src = getUserImage; // Use the stored image
     }
   }, []);

   const userForm = useRef(null);
   const userFullName = useRef(null);
   const userName = useRef(null);
   const userEmail = useRef(null);
   const userMobile = useRef(null)
   const validateForm = () => {
        if (userFullName.current.value.trim() == "" || userName.current.value.trim() == ""
              || userEmail.current.value.trim() == "" || userMobile.current.value.trim() == ""  ) {
            alert("Please fill all fields")
        }else{
            alert(`Your account has been registered - ${userFullName.current.value.trim()}`);
            let userData = {
              fullName: userFullName.current.value.trim(),
              userName: userName.current.value.trim(),
              Email: userEmail.current.value.trim(),
              mobile: userMobile.current.value.trim(),
            };
           let getUserInfo = localStorage.getItem("userInformation");

           getUserInfo = getUserInfo ? JSON.parse(getUserInfo) : [];

           if (!Array.isArray(getUserInfo)) {
            getUserInfo = []
           };

           localStorage.setItem("userInformation", JSON.stringify(getUserInfo));

        }
   }
//    store User details in LS
   useEffect(() => {
            const storeInLocal = () => {
              let getUserInfo = localStorage.getItem("userInformation");
            //   Check if info exists
              if (!Array.isArray(getUserInfo)) {
                getUserInfo = [];
              }
            userFullName.current.value = userData.fullName
            }
   }, [])
   useEffect(() => {
        userForm.current.addEventListener("submit", (event) => {
            event.preventDefault();
            validateForm();
        })
   }, [])
  return (
    <>
      <div className="profile_Container">
        <div className="icon_Back">
          <img src={backlink} id="backLink" onClick={backLinkNav} alt="" />
        </div>
        <div className="pageHead">
          <h2>Profile </h2>
        </div>
        <div className="profileImage">
          <input
            type="file"
            id="file-input"
            ref={fileInput}
            accept="image/*"
            alt=""
            style={{ display: "none" }}
          />
          <img id="user-image-profile" ref={userImage} alt="" />
          <img src={Camera} id="user-camera-profile" ref={cameraIcon} alt="" />
        </div>
        <div className="personalInfo">
          <h2>Personal Information</h2>
          <form action="" id="userForm" ref={userForm}>
            <div className="fullName">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                id="fullName"
                ref={userFullName}
              />
            </div>
            <div className="userName">
              <label htmlFor="user-name">User Name</label>
              <input
                type="text"
                name="name"
                placeholder="User Name"
                id="user-name"
                ref={userName}
              />
            </div>
            <div className="email">
              <label htmlFor="email-address">Email Address</label>
              <input
                type="email"
                name="email"
                id="email-address"
                placeholder="Email"
                ref={userEmail}
              />
            </div>
            <div className="mobile">
              <label htmlFor="mobile-number">Mobile No</label>
              <input
                type="tel"
                name="tel"
                id="mobile-number"
                placeholder="Mobile No"
                ref={userMobile}
              />
            </div>
            <div className="location">
              <label htmlFor="location-user">Location</label>
              <select name="address" id="location-user"></select>
            </div>
            <div className="saveDiv">
              <button id="save-button" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
