import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogOut = () => {
  const navigateOut = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    // sessionStorage.removeItem("userData");
    const logOutFn = async () => {

      try {
        const storedUserData = JSON.parse(sessionStorage.getItem("userData"));
        // console.log(storedUserData);
        const userID = storedUserData?.id;
        // console.log(userID);
        const userEmail = storedUserData?.userEmail;
        const userName = storedUserData?.username;
        // console.log(userEmail, userName);
        // console.log("userData in session:", sessionStorage.getItem("userData"));

        if (!userEmail) {
          throw new Error("User Email not found");
        }
        const userCheck = await axios.get(
          `https://estate-app-keev.onrender.com/users?id=${userID}`
        );
        if (userCheck.data.length === 0) {
          console.warn("User not found. Clearing session and redirecting.");
          sessionStorage.removeItem("userData");
          navigateOut("/");
          return;
        }
        //Move this code to the delete account component
        // const userDel = await axios.delete(
        //   `https://estate-app-keev.onrender.com/users/${userID}`
        // );
        // const userResult = await userDel.data;
        // console.log(userResult);
        // console.log(userDel.status, userDel.statusText);
        sessionStorage.removeItem("userData")
        setIsLoggedOut(true);
        setTimeout(() => {
          setIsLoggedOut(false);
          navigateOut("/");
        }, 5000);
      } catch (err) {
        if (err.response?.status === 404) {
          console.warn("User already deleted from server.");
          sessionStorage.removeItem("userData"); // clear stale data
          setTimeout(() => {
            setIsLoggedOut(false);
            navigateOut("/");
          }, 5000);
        } else {
          console.error("Logout error:", err);
        }
      }
      
    };
    logOutFn();
  }, []);
 


  return (
    <>
      {isLoggedOut && (
        <div className="logOutBox">
          <div
            className="successMsg"
            id="logOutmsg"
            style={{ textAlign: "center" }}>
            <p>
              <i
                className="fa-solid fa-circle-check"
                style={{ fontSize: "30px" }}></i>
              <br />
              <strong style={{ marginLeft: "5px" }}>Log Out Successful</strong>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LogOut;
