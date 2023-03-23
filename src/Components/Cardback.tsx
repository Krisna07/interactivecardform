import React from "react";
interface cvv {
  cvv: string;
}
const Cardback = ({ cvv }: cvv) => {
  return (
    <div className="cardBack card">
      <div className="cvv">{cvv ? cvv : "123"}</div>
    </div>
  );
};

export default Cardback;
