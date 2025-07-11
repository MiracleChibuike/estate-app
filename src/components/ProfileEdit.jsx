import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import backlink from "../assets/backlink.svg";
import "./Dashboard.css";
import user from "../assets/user.jpg";
import Camera from "../assets/Camera.svg";
import { Helmet } from "react-helmet-async";


const ProfileEdit = () => {
  const navigateBack = useNavigate();
  const backLinkNav = () => {
    navigateBack("/Dashboard");
  };

    const fileInput = useRef(null);
    const userImage = useRef(null);
    // const cameraIcon = useRef(null);
    const userIcon = useRef(null);

      useEffect(() => {
        fileInput.current.addEventListener("change", (event) => {
          const files = event.target.files[0];
          if (files) {
            const reader = new FileReader();
            reader.onload = (e) => {
              userImage.current.src = e.target.result;
              localStorage.setItem("userProfile", userImage.current.src);
            };
            reader.readAsDataURL(files);
          }
        });
      }, []);
    
      // useEffect(() => {
      //   cameraIcon.current.addEventListener("click", () => {
      //     fileInput.current.click();
      //   });
      // });
    
      useEffect(() => {
        const getUserImage = localStorage.getItem("userProfile");
        if (getUserImage) {
          //  userIcon.current.style.display = "none";
          userImage.current.src = getUserImage; // Use the stored image
        }
      }, []);

       const userForm = useRef(null);
        const userFullName = useRef(null);
        const userName = useRef(null);
        const userEmail = useRef(null);
        const userMobile = useRef(null);
          const userState = useRef(null)
        const validateForm = () => {
            if (
              userFullName.current.value.trim() == "" ||
              userName.current.value.trim() == "" ||
              userEmail.current.value.trim() == "" ||
              userMobile.current.value.trim() == ""
            ) {
              alert("Please fill all fields");
            } else {
              alert(
                `Thank you, ${userFullName.current.value.trim()}. Your account has been succesfully registered. `
              );
              sessionStorage.setItem("fullName", userFullName.current.value.trim());
              sessionStorage.setItem("userName", userName.current.value.trim());
              sessionStorage.setItem("userEmail", userEmail.current.value.trim());
              sessionStorage.setItem("userMobile", userMobile.current.value.trim());
              sessionStorage.setItem("userState", userState.current.value.trim());
              return ProfileEdit;
            }
          };
          //    store User details in LS
          useEffect(() => {
            if (
              userFullName.current &&
              userName.current &&
              userEmail.current &&
              userMobile.current
        
            ) {
              userFullName.current.value = sessionStorage.getItem("fullName") || "";
              userName.current.value = sessionStorage.getItem("userName") || "";
              userEmail.current.value = sessionStorage.getItem("userEmail") || "";
              userMobile.current.value = sessionStorage.getItem("userMobile") || "";
              userState.current.value = sessionStorage.getItem("userState") || "";
            }
          }, []);
          
          // Call the function on button click
          useEffect(() => {
            userForm.current.addEventListener("submit", (event) => {
              event.preventDefault();
              validateForm();
            });
          }, []);


          const profileNav = useNavigate()
          const buttonEdit = useRef(null)
          useEffect(() => {
            buttonEdit.current.addEventListener("click", () => {
              profileNav("/Profile")
                // alert("Can't edit Profile now. Try again later")
            })
          }, []);
    const loaderEdit = useState(null);
    const containerEdit = useState(null);

    useEffect(() => {
      const showloaderPro = () => {
        setTimeout(() => {
          loaderEdit.current.style.display = "none";
          containerEdit.current.style.display = "block";
        }, 7000)
      };

      showloaderPro();
    })
  return (
    <>
    <Helmet>
        <title>Edit your Profile | KEEV</title>
        <meta name="description" content="Profile Edit Page" />
        <meta name="keywords" content="Edit Profile" />
    </Helmet>
      {/* Loader for Profile container */}
      <header class="loader-container" ref={loaderEdit}>
        <span class="loader2"></span>
      </header>
      <div
        className="profile_Container"
        id="profileContentLoad"
        ref={containerEdit}>
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
          {/* Default image to be shown on page load */}
          {/* <i className="fa-solid fa-user" id="iconUser" ref={userIcon}></i> */}
          {/* <img src={Camera} id="user-camera-profile" ref={cameraIcon} alt="" /> */}
          {/* button for Edit */}
        </div>
        <div className="editButton">
          <button id="edit" ref={buttonEdit}>
            Edit
          </button>
        </div>
        <div className="personalInfo">
          <h2>Personal Information</h2>
          <form action="" id="userForm" ref={userForm}>
            <div className="fullName">
              <label htmlFor="fullName">Full Name</label>
              <input
                readOnly
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
                readOnly
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
                readOnly
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
                readOnly
                type="tel"
                name="tel"
                id="mobile-number"
                placeholder="Mobile No"
                ref={userMobile}
              />
            </div>
            <div className="location">
              <label htmlFor="location-user">Location</label>
              <input
                readOnly
                name="address"
                id="location-user"
                ref={userState}></input>
            </div>
            <div className="saveDiv">
              {/* <button id="save-button" type="submit">
                Confirm
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
