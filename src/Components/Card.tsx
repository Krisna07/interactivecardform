import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ cardDetails }: any) => {
  const cardName = !cardDetails.cardname
    ? "Firstname Lastname"
    : cardDetails.cardname;

  console.log(cardDetails);
  const cardNum = cardDetails.cardnumber
    ? cardDetails.cardnumber.match(/.{1,4}/g) || []
    : "0000000000000000".match(/.{1,4}/g) || [];

  return (
    <div className="card cardFront">
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
            {!cardDetails.expiryDate.month
              ? "MM"
              : cardDetails.expiryDate.month}
            /{cardDetails.expiryDate.year ? cardDetails.expiryDate.year : "YY"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
