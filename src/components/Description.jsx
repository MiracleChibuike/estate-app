import { useNavigate } from "react-router-dom";
import "./PropertyPage.css";
import backlink from "../assets/backlink.svg";
import main from "../assets/main.png";
import NewDescp from "../assets/NewDescp.svg"
import { useEffect, useRef } from "react";

const Description = () => {

    const bacKnavigate = useNavigate();

    const backLinkNav = () => {
        bacKnavigate("/Services")
    }
      const buyMessage = () => {
        alert(
          "Sorry, placing orders is not availabel currently!  \n Please check again later  "
        );
      };
    // const buyButtonRef = useRef(null);

    // useEffect(() => {
      
    // }, [])

  return (
    <>
      <div className="propertyContainer">
        <div className="icon_Back">
          <img src={backlink} id="backLink" onClick={backLinkNav} alt="" />
        </div>
        <div className="propetyHead">
          <h2>House Descriptions</h2>
        </div>
        {/* Image of house */}
        <div className="houseImg">
          <img src={NewDescp} id="houseImg" alt="" />
        </div>
        <div className="houseInfos">
          <p className="houseName">Bluebell Cottage</p>
          <p className="houseFlat">4 Bedroom Flat</p>
        </div>
        <div className="houseDetails">
          <p>
            Bluebell Cottage is a charming yet opulent luxury retreat,
            seamlessly blending the quaintness of countryside aesthetics with
            the indulgence of modern amenities. Nestled in a secluded meadow
            surrounded by lush woodlands, this property is a sanctuary of
            tranquility and refinement.It is located a luxurious countryside
            retreat designed to captivate the senses and offer an idyllic escape
            from the bustle of everyday life. Its enchanting setting amidst
            rolling meadows or a serene woodland provides a backdrop of natural
            beauty that changes with the seasons, from the vibrant blues of
            springtime bluebells to the golden hues of autumn leaves.Bluebell
            Cottage is more than just a home; it’s an experience. Every detail,
            from the texture of the stone walls to the soft hum of the wind in
            the bluebells, contributes to an environment that feels both
            enchanting and deeply comforting. Whether it’s waking to the sound
            of birdsong, enjoying a sunset from the terrace, or curling up in
            the library as rain patters on the windows, every moment spent here
            is infused with serenity and grace.
          </p>
        </div>
        <div className="houseContents">
          <h2>Features</h2>
          <span>Storey building</span>
          <span>3 Living rooms</span>
          <span>1 Library/study room</span>
          <span>2 Kitchens</span>
          <span>5 Bathrooms and toilets </span>
          <span>2 Swiming Pools</span>
          <span>1 Garden</span>
          <span>4 pantries</span>
          <span>2 visitors room</span>
          <span>1 confrence room</span>
          <span>1 fireplace HVAC System</span>
          <span>CCTV Cameras</span>
          <span>24/7 Solar Wide Garage</span>
          <span>24/7 Water Supply</span>
          <span> Automated smart home</span>
        </div>
        <div className="buyButton">
          <button id="buyButton" onClick={buyMessage}>
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default Description;
