import React from "react";

import "./App.css";
import Card from "./Components/Card";
import Cardback from "./Components/Cardback";

function App() {
  return (
    <div className="App">
      <div className="leftCard">
        <Card />
        <Cardback />
      </div>
      <div className="rightForm">
        <form className="form">
          <label className="formLabel">
            CARDHOLDER NAME
            <input type="text" className="inputField" />
          </label>
          <label className="formLabel">
            CARD NUMBER
            <input type="text" className="inputField" />
          </label>
          <div className="exp_cvccontainer">
            {" "}
            <label className="formLabel">
              EXP. DATE (MM/YY)
              <div className="expInput">
                <input type="text" className="inputField" />
                <input type="text" className="inputField" />
              </div>
            </label>
            <label className="formLabel">
              CVC
              <input type="text" className="inputField" />
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
