import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import backlink from "../assets/backlink.svg";
import "./Dashboard.css";
import user from "../assets/user.jpg";
import Camera from "../assets/Camera.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProfileEdit from "../components/ProfileEdit";
import axiox from "axios";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const Profile = () => {
  const navigateBack = useNavigate();
  const backLinkNav = () => {
    navigateBack("/Dashboard");
  };

  const EditPageNavigate = useNavigate();

  const fileInput = useRef(null);
  const userImage = useRef(null);
  const cameraIcon = useRef(null);
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

  useEffect(() => {
    cameraIcon.current.addEventListener("click", () => {
      fileInput.current.click();
    });
  });

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
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  const [newData, setNewData] = useState([]);

  const validateForm = () => {
    if (
      userFullName.current.value.trim() == "" ||
      userName.current.value.trim() == "" ||
      userEmail.current.value.trim() == "" ||
      userMobile.current.value.trim() == "" ||
      userState.current.value == ""
    ) {
      alert("Please fill all fields");
      // const selectedvalue = userState.current.value;
      // const selectedOption = userState.current.options[userState.current.selectedIndex];
      // console.log(selectedOption.text)
    } else {
      alert(
        `Thank you, ${userFullName.current.value.trim()}. Your account has been succesfully registered
        and profile updated succesfully. `
      );
      console.log(userState.current.value)
      localStorage.setItem("fullName", userFullName.current.value.trim());
      localStorage.setItem("userName", userName.current.value.trim());
      localStorage.setItem("userEmail", userEmail.current.value.trim());
      localStorage.setItem("userMobile", userMobile.current.value.trim());
      localStorage.setItem("userState", userState.current.value.trim());
      EditPageNavigate("/EditProfile");
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
      userFullName.current.value = localStorage.getItem("fullName") || "";
      userName.current.value = localStorage.getItem("userName") || "";
      userEmail.current.value = localStorage.getItem("userEmail") || "";
      userMobile.current.value = localStorage.getItem("userMobile") || "";
      userState.current.value = localStorage.getItem("userState") || "";
    }
  }, []);
  
  // Call the function on button click
  useEffect(() => {
    userForm.current.addEventListener("submit", (event) => {
      event.preventDefault();
      validateForm();
    });
  }, []);

  // Fetch lists of states API

  useEffect(() => {
       const headers = new Headers();
      //  headers.append("X-Api-Key", "4hueXJfjAZAV3FaBKX93Z9xun0Ffnxdo");

      //  const options = {
      //    method: "GET",
      //    headers: headers,
      //    redirect: "follow",
      //  };
          const fetchAllStates = async () => {
         
             try {
               const statesURl = await axios.get(
                 "https://naija-places.toneflix.com.ng/api/v1/states",
                 {
                   headers: {
                     "X-Api-Key": "4hueXJfjAZAV3FaBKX93Z9xun0Ffnxdo",
                   },
                 }
               );
               // console.log(statesURl.statusText)
               const statesData = await statesURl.data.data;
               console.log(statesData);
               setNewData(statesURl.data.data);
              
             } catch (error) {
               console.error(
                 `Error fetching data: ${error.response?.status || "Unknown"} - ${error.message} `
               );
             } finally {
               setLoader(false);
             }
          };

          fetchAllStates();
  }, []);


  return (
    <>
    <Helmet>
        <title>Profile | KEEV</title>
        <meta name="description" content="Profile page" />
    </Helmet>
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
          {/* Default image to be shown on page load */}
          {/* <i className="fa-solid fa-user" id="iconUser" ref={userIcon}></i> */}
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
              <select name="address" id="location-user" ref={userState}>
                <option value=""> Select a State </option>
                  {newData.map((state) => (
                    <option key={state.id} value={state.name}>
                      {state.name}
                    </option>
                  ))}
              </select>
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
