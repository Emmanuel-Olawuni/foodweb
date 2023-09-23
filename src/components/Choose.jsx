import React from "react";
import Image3 from "@/../public/images/image3.png";
import Hand from "@/../public/images/hand.png";
import Image from "next/image";
import { BsTruck } from "react-icons/bs";
import { PiHamburgerLight } from "react-icons/pi";
import { CiTimer } from "react-icons/ci";
import { LuMountain } from "react-icons/lu";



const Choose = () => {
  return (
    <section>
      <div className=" flex">
        <div className="imagecontainer">
          <div className="choose1">
            <Image src={Hand} width={300} />
          </div>
          <div className="choose2 ">
            <Image src={Image3} priority />
          </div>
        </div>
        <div className="w-1/3 flex gap-4 flex-col">
          <h4 className=" text-2xl font-miniver font-normal text-green heading">
            WHy Choose Us
          </h4>
          <p className="font-inter text-3xl font-semibold text-gray-800 balance">
            Why We are the best
          </p>

          <p className=" font-inter text-gray-600 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
            ducimus saepe sapiente eos laboriosam ipsa amet corrupti temporibus
            quod, delectus voluptates est. Voluptates alias suscipit iure ipsum
            earum, officiis eius!
          </p>
          <p className=" font-inter text-gray-600 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
            ducimus saepe sapiente eos.
          </p>
          <div class="choose-card">
            <div class="cards card-1 font-inter font-semibold text-gray-700  shadow-gray-300 shadow-md">
              <BsTruck size={30} /> Fast Delivery
            </div>
            <div class="cards card-2 font-inter font-semibold text-gray-700  shadow-gray-300 shadow-md">
              <CiTimer size={30} /> 24/7 Service
            </div>
            <div class="cards card-3 font-inter font-semibold text-gray-700  shadow-gray-300 shadow-md">
              <PiHamburgerLight size={30} /> Fresh Food
            </div>
            <div class="cards card-4 font-inter font-semibold text-gray-700  shadow-gray-300 shadow-md">
              <LuMountain size={30} /> Quality Maintain
            </div>
          </div>
        </div>
      </div>

      <div>
     {/* <Tab /> */}
      </div>
    </section>
  );
};

export default Choose;
