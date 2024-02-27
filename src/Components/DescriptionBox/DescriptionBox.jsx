import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        {/* <div className="descriptionbox-nav-box fade">Reviews (122)</div> */}
      </div>
      <div className="descriptionbox-description">
        <p>
        Buy, bid & sell verified sneakers & streetwear from Nike, Air Jordan, Yeezy, Supreme & more.
         Delivered to your doorstep. Visit our website & download our app.

         We serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence.
        </p>
        <p>
          Products are displayed with detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
