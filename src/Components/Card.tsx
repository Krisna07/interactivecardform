import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ cardDetails, rotate }: any) => {
  const cardName = !cardDetails.cardname
    ? "Firstname Lastname"
    : cardDetails.cardname;
  const cardnumber = cardDetails.cardnumber.trim(1, 16);
  const cardNum = cardDetails.cardnumber
    ? cardDetails.cardnumber.trim(1, 16).match(/.{1,4}/g) || []
    : "0000000000000000".match(/.{1,4}/g) || [];

  return (
    <div
      className="card cardFront"
      style={rotate ? { transform: `rotateY(${rotate})` } : {}}
    >
      <div className="cardTop">
        <div className="circleBig"></div>
        <div className="circleSmall"></div>
      </div>
      <div className="cardBottom">
        <div className="cardNumberContainer">
          {cardNum.map((num: string, x: any) => (
            <span className="cardNumber" key={x}>
              {num}
            </span>
          ))}
        </div>
        <div className="card-name-expiry">
          <div className="cardname">{cardName.toLocaleUpperCase()}</div>
          <div className="expiry">
            {!cardDetails.month ? "MM" : cardDetails.month}/
            {cardDetails.year ? cardDetails.year : "YY"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
