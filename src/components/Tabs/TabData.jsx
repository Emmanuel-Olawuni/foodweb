import React from "react";

const TabData = ({data}) => {

    const {name , description , calories, price} = data
  return (
    <div className=" flex justify-between p-3 border-b border-gray-500 border-opacity-30">
      <div className=" flex flex-col">
        <p className=" font-poppins font-bold text-gray-900 text-lg">
 
         {name}
        </p>
        <p className=" font-poppins font-semibold text-gray-600 text-base">
      {description}
        </p>
        <p className=" font-poppins font-medium text-gray-500 text-sm">
          {calories} CAL
        </p>
      </div>
      <div className=" text-green  font-poppins font-bold text-lg">${price}</div>
    </div>
  );
};

export default TabData;
