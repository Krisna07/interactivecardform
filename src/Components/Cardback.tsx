import React from "react";
interface cvv {
  cvv: string;
  rotate: string;
}
const Cardback = ({ cvv, rotate }: cvv) => {
  return (
    <div
      className="cardBack card"
      style={rotate ? { transform: `rotateY(-${rotate})` } : {}}
    >
      <div className="cvv">{cvv ? cvv : "123"}</div>
    </div>
  );
};

export default Cardback;
