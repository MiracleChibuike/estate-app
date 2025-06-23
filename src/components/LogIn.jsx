import { Helmet } from "react-helmet-async";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const LogIn = () => {
    const profileNav = useNavigate();
    const [isUserValid, setIsUserValid] = useState(false);
    const [isUserFound, setIsUserFound] = useState(false);
    const [isLoggedIn, setIsLoggIn] = useState(false);
    const user_name = useRef(null);
    const user_email = useRef(null);
    const user_password = useRef(null);
    const loginForm = useRef(null);

    useEffect(() => {
        const handleLogIn = (e) => {
          e.preventDefault();
          const loginFields = [user_name, user_email, user_password];
          let isValid = true;

          loginFields.forEach((field) => {
            if (field.current.value.trim() === "") {
              field.current.style.outline = "2px solid #700505";
              field.current.style.border = "none";
              isValid = false;
            } else {
              field.current.style.outline = "2px solid rgba(0, 121, 107, 1)";
            }
          });

          if (!isValid) {
            setIsUserValid(true);
            setTimeout(() => {
              setIsUserValid(false);
            }, 5000);
            return;
          }
          // Check if user exists
          const userData = localStorage.getItem("userDataKeev");
          console.log(userData);
          if (userData) {
            const nameNew = JSON.parse(userData).username;
            const EmailNew = JSON.parse(userData).userEmail;
            const PasswordNew = JSON.parse(userData).userpassword;

            if (
              user_name.current.value.trim() === nameNew &&
              user_email.current.value.trim() === EmailNew &&
              user_password.current.value.trim() === PasswordNew
            ) {
              setIsLoggIn(true);
              setTimeout(() => {
                setIsLoggIn(false);
              }, 5000);
              setTimeout(() => {
                profileNav("/Profile");
              }, 5000);
            } else {
              // Incorrect Credentials
              setIsUserFound(true);
              setTimeout(() => {
                setIsUserFound(false);
              }, 5000);
            }
          }else{
            // No user found
            setIsUserFound(true);
            setTimeout(() => {
                setIsUserFound(false)
            }, 5000)
          }

        };
        

        loginForm.current.addEventListener("submit", handleLogIn);

        const loginFields = [user_name, user_email, user_password];
        loginFields.forEach((input) => {
          input.current.addEventListener("input", () => {
            if (input.current.value.trim() !== "") {
              input.current.style.outline = "2px solid rgba(0, 121, 107, 1)";
            } else {
              input.current.style.outline = "2px solid #700505";
            }
          });
        });
    }, [])
    return (
      <>
        <Helmet>
          <title>Welcome back - LogIn</title>
          <meta name="description" content="lOGIN KEEV" />
        </Helmet>
        <div className="logIn">
          <div className="logInContents">
            {isUserValid && (
              <div className="errorDisplay">
                <p>
                  {" "}
                  <i class="fa-solid fa-triangle-exclamation"></i> Please
                  provide all your credentials
                </p>
              </div>
            )}
            {isUserFound && (
              <div className="errorDisplay">
                <p>
                  {" "}
                  <i class="fa-solid fa-triangle-exclamation"></i> Error - No
                  such user found <br /> or Incorrect credentials entered
                </p>
              </div>
            )}
            {isLoggedIn && (
              <div className="successMsg" style={{ textAlign: "center" }}>
                <p>
                  <i
                    class="fa-solid fa-circle-check"
                    style={{ fontSize: "30px" }}></i>{" "}
                  <br />
                  <strong style={{ marginLeft: "5px" }}>
                    Log In Successful
                  </strong>
                </p>
              </div>
            )}
            <h2>
              Welcome back, Log In to your <br /> account
            </h2>
            <div className="logInForm">
              <form action="" id="logInForm" ref={loginForm}>
                <div className="nameInput">
                  <label htmlFor="name">User Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="User Name"
                    className="inputField"
                    ref={user_name}
                  />
                </div>
                {/* Email */}
                <div className="emailInput">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="inputField"
                    ref={user_email}
                  />
                </div>
                {/* Password */}
                <div className="passWordInput">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="***********"
                    className="inputField"
                    ref={user_password}
                  />
                </div>
                <p
                  className="check"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "5px 0",
                  }}>
                  <label htmlFor="check" style={{ fontWeight: "lighter" }}>
                    Remember me next time
                  </label>
                  <input
                    type="checkbox"
                    id="check"
                    // ref={checkBox}
                    style={{
                      width: "15px",
                      height: "15px",
                      transform: "scale(1.5)",
                    }}
                  />
                </p>
                {/* Log In Button */}
                <div className="LogBtn">
                  <button type="submit">Log In</button>
                </div>
              </form>
            </div>
          </div>
          <p style={{ textAlign: "center", margin: "15px 0", color: "#fff" }}>
            Don't have an account?{" "}
            <Link to={"/Signup"}>
              <span
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}>
                Create account
              </span>
            </Link>
          </p>
        </div>
      </>
    );
};

export default LogIn;