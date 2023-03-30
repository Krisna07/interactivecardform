import { execArgv } from "process";
import React, { useState } from "react";

import "./App.css";
import Card from "./Components/Card";
import Cardback from "./Components/Cardback";
import Success from "./Components/Success";
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
  const [err, setErr] = useState({
    nameErr: "",
    numErr: "",
    dateErr: "",
    cvvErr: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCardDetails((prevState) => ({ ...prevState, [name]: value }));
  };
  const [rotate, setRotate] = useState<string>("");

  const validateForm = () => {
    let isValid = true;
    let errors = {
      nameErr: "",
      numErr: "",
      dateErr: "",
      cvvErr: "",
    };

    if (!cardDetails.cardname) {
      isValid = false;
      errors.nameErr = "Please enter cardholder name";
    }
    if (!cardDetails.cardname.match(/^[A-Za-z  ]+$/)) {
      isValid = false;
      errors.nameErr = "Please enter valid name";
    }

    if (!cardDetails.cardnumber) {
      isValid = false;
      errors.numErr = "Please enter card number";
    } else if (!/^[0-9]{16}$/.test(cardDetails.cardnumber)) {
      isValid = false;
      errors.numErr = "Please enter a valid 16 digit card number";
    }

    if (!cardDetails.month || !cardDetails.year) {
      isValid = false;
      errors.dateErr = "Please enter expiry date";
    } else {
      const month = parseInt(cardDetails.month);
      const year = parseInt(cardDetails.year);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;

      if (
        year < currentYear ||
        (year === currentYear && month < currentDate.getMonth() + 1)
      ) {
        isValid = false;
        errors.dateErr = "Please enter a valid expiry date";
      }
    }

    if (!cardDetails.cvv) {
      isValid = false;
      errors.cvvErr = "Please enter CVV";
    } else if (!/^[0-9]{3,4}$/.test(cardDetails.cvv)) {
      isValid = false;
      errors.cvvErr = "Please enter a valid CVV";
    }

    setErr(errors);
    return isValid;
  };
  const [success, setSucess] = useState();
  const [btnText, setBtnText] = useState("Confirm");

  const submitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      rotate ? setRotate("0deg") : setRotate("360deg");
      setBtnText("Continue");
    }
  };
  return (
    <div className="App">
      <div className="leftCard">
        <Card cardDetails={cardDetails} rotate={rotate} />
        <Cardback cvv={cardDetails.cvv} rotate={rotate} />
      </div>
      <Success />
      <div className="rightForm">
        <form className="form" onSubmit={submitForm}>
          <label className="formLabel">
            CARDHOLDER NAME
            <input
              type="text"
              className="inputField"
              name={"cardname"}
              placeholder={"eg. FIRSTNAME LASTNAME"}
              value={cardDetails.cardname}
              onChange={handleChange}
              maxLength={18}
            />
            {err.nameErr ? <span className="err">{err.nameErr}</span> : ""}
          </label>
          <label className="formLabel">
            CARD NUMBER
            <input
              type="string"
              className="inputField"
              name={"cardnumber"}
              placeholder={"eg. 1234567890987654"}
              value={cardDetails.cardnumber}
              onChange={handleChange}
              max={9999999999999999}
              min={"0000000000000000"}
              maxLength={16}
              required
            />
            {err.numErr ? <span className="err">{err.numErr}</span> : ""}
          </label>
          <div className="exp_cvccontainer">
            <label className="formLabel">
              EXP. DATE (MM/YY)
              <div className="expInput">
                <input
                  type="string"
                  className="inputField"
                  name={"month"}
                  value={cardDetails.month}
                  placeholder="MM"
                  min={0}
                  minLength={1}
                  maxLength={2}
                  max={12}
                  onChange={handleChange}
                />
                <input
                  type="string"
                  className="inputField"
                  placeholder="YY"
                  name={"year"}
                  minLength={1}
                  maxLength={2}
                  value={cardDetails.year}
                  onChange={handleChange}
                />
              </div>
              {err.dateErr ? <span className="err">{err.dateErr}</span> : ""}
            </label>
            <label className="formLabel">
              CVC
              <input
                type="string"
                className="inputField"
                name={"cvv"}
                onChange={handleChange}
                value={cardDetails.cvv}
                placeholder={"eg. 123"}
                minLength={3}
                maxLength={3}
              />
              {err.cvvErr ? <span className="err">{err.cvvErr}</span> : ""}
            </label>
          </div>
          <button type="submit" className="button">
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
