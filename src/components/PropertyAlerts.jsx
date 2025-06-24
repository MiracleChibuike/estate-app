import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import backlink from "../assets/backlink.svg";
import "./PropertyPage.css"


const PropertyAlerts = () => {
    const navigateDashboard = useNavigate();

    const loadDashboard = () => {
        navigateDashboard("/Dashboard");
    }
    return (
        <>
        <Helmet>
            <title>Your properties | KEEV</title>
            <meta name="description" content="Purchased Properties" />
        </Helmet>
        <div className="propertyAlertsContainer" style={{padding: "20px"}}>
             <div className="icon_Back">
                        <img src={backlink} id="backLink" onClick={loadDashboard} alt="" />
                      </div>
            <h2 style={{textAlign: "center", margin: "15px 0", fontWeight: "700", lineHeight: "68.3px"}}>All Properties Purchased </h2>

            {/* Will return all the properties a customer has bought */}
            {/* A default message to show */}
            <p>No purchased properties yet, all the properties you've purchased will be shown here</p>
        </div>
        </>
    );
};
export default PropertyAlerts