import { Children, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import "./AuthGuard.css"

const AuthGuard = ({children}) => {
    const isLoggedIn = sessionStorage.getItem("userData");
    const [showModal, setShowModal] = useState(false);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        if (!isLoggedIn) {
            setShowModal(true);
        }
    }, [isLoggedIn])
    const navigate = useNavigate();
//handle Close Modal
const handleCloseModal = () => {
    setShowModal(false);
    setShouldRedirect(true);
}
    if (shouldRedirect) {
        return <Navigate to="/Signup" replace/>
    }

    if (!isLoggedIn && showModal) {
        return (
          <>
            <div className="modalShow">
              <div className="modalContainer">
                <div className="modalActions">
                  <p id="warn">
                    {" "}
                    <i
                      class="fa-solid fa-triangle-exclamation"
                      id="warnIcon"></i>
                  </p>
                  <p id="close">
                    <i class="fa-solid fa-xmark" onClick={handleCloseModal}></i>
                  </p>
                </div>
                <div className="modalIn">
                  <h2 className="modalTitle">LogIn Required</h2>
                  <p>You must be logged in to access this page</p>
                </div>
                <div className="consent">
                  <button onClick={() => navigate("/Signup")}>Go to Sign Up </button>
                </div>
              </div>
            </div>
          </>
        );
    }

    return children;
    
};

export default AuthGuard;