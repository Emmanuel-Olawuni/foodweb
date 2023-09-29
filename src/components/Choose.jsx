import React from "react";

import { BsTruck } from "react-icons/bs";
import { PiCookingPotBold, PiHamburgerLight } from "react-icons/pi";
import { CiTimer } from "react-icons/ci";
import ChooseImages from "./AnimatedImages/ChooseImages";

const Choose = () => {
  return (
    <section className=" mt-32">
      <div className=" flex flex-col md:flex-row gap-10 md:gap-3 items-center justify-center">
        <ChooseImages />
        <div className="w-full md:w-1/3 m-auto flex gap-4 flex-col">
          <h4 className=" text-2xl font-miniver font-normal text-green heading">
            Why Choose Us
          </h4>
          <p className="font-inter text-3xl font-semibold text-gray-800 balance">
            Why We are the best
          </p>

          <p className=" font-poppins text-gray-600 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
            ducimus saepe sapiente eos laboriosam ipsa amet corrupti temporibus
            quod, delectus voluptates est. Voluptates alias suscipit iure ipsum
            earum, officiis eius!
          </p>
          <p className=" font-poppins text-gray-600 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
            ducimus saepe sapiente eos.
          </p>
          <div className="w-full choose-card grid grid-cols-2 gap-6">
            <div className=" flex w-auto flex-col md:flex-row  items-center justify-around gap-3 p-3 font-poppins font-semibold text-gray-900  shadow-gray-300 shadow-sm">
              <BsTruck size={30} /> Fast Delivery
            </div>
            <div className=" flex w-auto flex-col md:flex-row  items-center justify-around gap-3 p-3 font-poppins font-semibold text-gray-900  shadow-gray-300 shadow-sm">
              <CiTimer size={30} /> 24/7 Service
            </div>
            <div className=" flex w-auto flex-col md:flex-row  items-center justify-around gap-3 p-3 font-poppins font-semibold text-gray-900  shadow-gray-300 shadow-sm">
              <PiHamburgerLight size={30} /> Fresh Food
            </div>
            <div className=" flex w-auto flex-col md:flex-row  items-center justify-around gap-3 p-3 font-poppins font-semibold text-gray-900  shadow-gray-300 shadow-sm">
              <PiCookingPotBold size={30} /> Healthy Cooks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
