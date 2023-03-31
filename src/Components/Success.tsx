import React from "react";

const Success = () => {
  return (
    <div className="complete">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 80 80"
        width="400"
        height="400"
      >
        <circle cx="40" cy="40" r="40" fill="url(#a)" />
        <path
          className="checkmark"
          d="M28 39.92 36.08 48l16-16"
          stroke="#fff"
          strokeWidth="3"
          strokeDasharray="50,50"
          strokeDashoffset="-50"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="-50"
            to="0"
            dur="0.5s"
            begin="click"
            fill="freeze"
          />
        </path>
        <defs>
          <linearGradient
            id="a"
            x1="-23.014"
            y1="11.507"
            x2="0"
            y2="91.507"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6348FE" />
            <stop offset="1" stopColor="#610595" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Success;
