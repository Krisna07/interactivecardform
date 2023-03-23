import React, { useState } from "react";

import "./App.css";
import Card from "./Components/Card";
import Cardback from "./Components/Cardback";
interface cardDetails {
  cardnumber: string;
  cardname: string;

  month: string;
  year: string;

  cvv: string;
}

function App() {
  const [cardDetails, setCardDetails] = useState<cardDetails>({
    cardname: "",
    cardnumber: "",
    month: "",
    year: "",
    cvv: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCardDetails((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="App">
      <div className="leftCard">
        <Card cardDetails={cardDetails} />
        <Cardback cvv={cardDetails.cvv} />
      </div>
      <div className="rightForm">
        <form className="form">
          <label className="formLabel">
            CARDHOLDER NAME
            <input
              type="text"
              className="inputField"
              name={"cardname"}
              placeholder={cardDetails.cardname}
              value={cardDetails.cardname}
              onChange={handleChange}
            />
          </label>
          <label className="formLabel">
            CARD NUMBER
            <input
              type="number"
              className="inputField"
              name={"cardnumber"}
              placeholder={cardDetails.cardnumber}
              value={cardDetails.cardnumber}
              onChange={handleChange}
              max="9999999999999999"
              min="0000000000000000"
              maxLength={16}
              required
            />
          </label>
          <div className="exp_cvccontainer">
            <label className="formLabel">
              EXP. DATE (MM/YY)
              <div className="expInput">
                <input
                  type="number"
                  className="inputField"
                  name={"month"}
                  value={cardDetails.month}
                  placeholder="MM"
                  min={0}
                  max={12}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  className="inputField"
                  placeholder="YY"
                  name={"year"}
                  value={cardDetails.year}
                  onChange={handleChange}
                />
              </div>
            </label>
            <label className="formLabel">
              CVC
              <input
                type="text"
                className="inputField"
                name={"cvv"}
                onChange={handleChange}
                value={cardDetails.cvv}
              />
            </label>
          </div>
          <input
            type="submit"
            value={"Confirm"}
            className="button inputField"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
