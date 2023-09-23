import React from "react";

const buttonType = {
  normal: "  bg-green text-white shadow-sm shadow-gray-800",
  invert: "border-green border text-green bg-white",
};
const Button = ({ buttonTypes, children }) => {
  return (
    <button
      className={`text-[14px]   w-[170px] h-[50px] text-center font-poppins font-medium -tracking-tighter rounded-md  ${buttonType[buttonTypes]}`}
    >
      {children}
    </button>
  );
};

export default Button;
