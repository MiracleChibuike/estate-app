import { Helmet } from "react-helmet-async";
import { react, useEffect, useState } from "react";
import "./SignUp.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  
  const profileNav = useNavigate();
  const [isFilledIn, setIsFilledIn] = useState(false);
  const [isPassWordSame, setIsPasswordSame] = useState(false);
  const [isAccountSuccess, setIsAccountSuccess] = useState(false);
  const btnSign = useRef(null);
  const allInputs = document.querySelectorAll(".inputField");
  const formEl = useRef(null);
  const userName = useRef(null);
  const userEmail = useRef(null);
  const password = useRef(null);
  const passwordConfirm = useRef(null);
  const checkBox = useRef(null);
  useEffect(() => {
    const accountCreate = (e) => {
      e.preventDefault();
      let formInputs = [userName, userEmail, password, passwordConfirm];
      let isValid = true;

      formInputs.forEach((input) => {
        if (input.current.value.trim() === "") {
          input.current.style.outline = "2px solid #700505";
          input.current.style.border = "none";
          isValid = false;
        } else {
          input.current.style.outline = "2px solid rgba(0, 121, 107, 1)";
        }
      });
      if (!isValid) {
        setIsFilledIn(true);
        setTimeout(() => {
          setIsFilledIn(false);
        }, 5000);
        return;
      }
      // Check for password Confirm
      if (
        password.current.value.trim() !== passwordConfirm.current.value.trim()
      ) {
        setIsPasswordSame(true);
        return;
      } else {
        setIsPasswordSame(false);
      }
      // Code for a succesful Account SignUp
      setIsAccountSuccess(true);
      setTimeout(() => {
        setIsAccountSuccess(false);
      }, 5000);

      // get information from users to store
      const userObject = {
        username: userName.current.value.trim(),
        userEmail: userEmail.current.value.trim(),
        userpassword: password.current.value.trim(),
        confirmPassword: passwordConfirm.current.value.trim(),
      };

      console.log(userObject);
      const getUserDetails = localStorage.setItem(
        "userDataKeev",
        JSON.stringify(userObject)
      );
      // Navigate to the Dashboard Section after creating an account
      setTimeout(() => {
        profileNav("/Profile");
      }, 5000)
    };
    formEl.current.addEventListener("submit", accountCreate);
    let formInputs = [userName, userEmail, password, passwordConfirm];
    formInputs.forEach((input) => {
      input.current.addEventListener("input", () => {
        if (input.current.value.trim() !== "") {
          input.current.style.outline = "2px solid rgba(0, 121, 107, 1)";
        } else {
          input.current.style.outline = "2px solid #700505";
        }
      });
    });
    
    // document.addEventListener("input", chekIfValid);
  }, []);
  return (
    <>
      <Helmet>
        <title>Create an account - KEEV</title>
        <meta name="description" content="Create account with KEEV" />
      </Helmet>
      <div className="signUp">
        <div className="signContents">
          {isFilledIn && (
            <div className="errorDisplay">
              <p>
                {" "}
                <i class="fa-solid fa-triangle-exclamation"></i> Please fill all
                fields
              </p>
            </div>
          )}
          {isAccountSuccess && (
            <div className="successMsg" style={{ textAlign: "center" }}>
              <p>
                <i
                  class="fa-solid fa-circle-check"
                  style={{ fontSize: "30px" }}></i>
                <strong style={{ marginLeft: "5px" }}>Success</strong>
              </p>
              <p>Your account was created succesfully</p>
            </div>
          )}
          <h2>Create an account with us</h2>
          <div className="createForm">
            <form action="" id="formTag" ref={formEl}>
              <div className="nameInput">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Please Enter Your Name"
                  className="inputField"
                  ref={userName}
                />
              </div>
              <div className="emailInput">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Please Enter Your Email"
                  className="inputField"
                  ref={userEmail}
                />
              </div>
              <div className="passWordInput">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="***********"
                  className="inputField"
                  ref={password}
                />
              </div>
              <div className="passwordConfirm">
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input
                  type="password"
                  id="passwordConfirm"
                  placeholder="***********"
                  className="inputField"
                  ref={passwordConfirm}
                />
                {isPassWordSame && (
                  <p style={{ color: "#700505" }}>Password does not match</p>
                )}
              </div>
              <p
                className="check"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "5px 0",
                }}>
                <label htmlFor="check" style={{ fontWeight: "lighter" }}>
                  Agree to our terms and conditions
                </label>
                <input
                  type="checkbox"
                  id="check"
                  ref={checkBox}
                  style={{
                    width: "15px",
                    height: "15px",
                    transform: "scale(1.5)",
                  }}
                  required
                />
              </p>
              <div className="signBtn">
                <button ref={btnSign} type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <p style={{ textAlign: "center", margin: "15px 0", color: "#fff" }}>
          Already have an account?{" "}
          <Link to={"/LogIn"}>
            <span
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer",
              }}>
              Log In
            </span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
