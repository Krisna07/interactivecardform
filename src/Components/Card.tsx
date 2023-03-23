import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  const [cardName, setCardname] = useState("Firstname Lastname");
  return (
    <div className="card cardFront">
      <div className="cardTop">
        <div className="circleBig"></div>
        <div className="circleSmall"></div>
      </div>
      <div className="cardBottom">
        <div className="cardNumberContainer">
          <span className="cardNumber">0000</span>
          <span className="cardNumber">0000</span>
          <span className="cardNumber">0000</span>
          <span className="cardNumber">0000</span>
        </div>
        <div className="card-name-expiry">
          <div className="cardname">{cardName.toLocaleUpperCase()}</div>
          <div className="expiry">00/00</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
