
import React from "react";
import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PropertyPage.css"
import house2 from "../assets/house2.png";
import house3 from "../assets/house3.png";
import house4 from "../assets/house4.png";
import house5 from "../assets/house5.png";
import house6 from "../assets/house6.png";
import house7 from "../assets/house7.png";
import house8 from "../assets/house8.png";
import house9 from "../assets/house9.png";
import house10 from "../assets/house10.png";
import hous11 from "../assets/house11.png";
import last from "../assets/last.png";
import last2 from "../assets/last2.png";
import main from "../assets/main.png"


const PropertyPage = () => {
    // const propertyRef = useRef(null);
    
    // const scrollToProperty = () => {
    //     propertyRef.current.scrollIntoView({ behavior: "smooth" });
    // };
    
    // return (
    //     <div className="propertyPage">
    //     <div className="propertyPageContent">
    //         <h1>Property Page</h1>
    //         <p>Click the button to scroll to the property section.</p>
    //         <button onClick={scrollToProperty}>Scroll to Property</button>
    //     </div>
    //     <div className="property" ref={propertyRef}>
    //         <h2>Property</h2>
    //         <p>Property details...</p>
    //     </div>
    //     </div>
    // );
    const houseData = [
      {
        id: 1,
        name: "House 1",
        location: "New York",
        price: "$500,000",
        houseImage: house2,
        houseDesc:
          "A beautiful and spacious home with modern amenities, located in a serene neighborhood. Perfect for families looking for comfort and convenience.",
      },
      {
        id: 2,
        name: "House 2",
        location: "California",
        price: "$750,000",
        houseImage: house3,
        houseDesc:
          "A beautiful and spacious home with modern amenities, located in a serene neighborhood. Perfect for families looking for comfort and convenience.",
      },
      {
        id: 3,
        name: "House 3",
        location: "Texas",
        price: "$300,000",
        houseImage: house4,
        houseDesc:
          "A beautiful and spacious home with modern amenities, located in a serene neighborhood. Perfect for families looking for comfort and convenience.",
      },
    ];

    const { id } = useParams();

    const house = houseData.find((h) => h.id === parseInt(id)); // Find the specific house data

    if (!house) {
      return <h1>Property not found</h1>;
    }
    return (
      <>
        <div className="propertyContainer">
          <div className="icon_Back">
            <img src={backlink} id="backLink" alt="" />
          </div>
          <div className="propetyHead">
            <h2>House Descriptions</h2>
          </div>
          {/* Image of house */}
          <div className="houseImg">
            <img 
            src={{ width: "100%", height: "auto" }} 
            alt="" />
          </div>
          <div className="houseInfos">
            <p className="houseName">{house.name}</p>
            <p className="houseFlat">{house.location}</p>
          </div>
        </div>
      </>
    );
};

export default PropertyPage;

