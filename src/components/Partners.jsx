import React from "react";
import FlowerHead from "./FlowerHead";
import brands from "@/../public/images/brand/image 2.png";
import brands1 from "@/../public/images/brand/image 56.png";
import brands2 from "@/../public/images/brand/image 57.png";
import brands3 from "@/../public/images/brand/image 58.png";
import brands4 from "@/../public/images/brand/image 59.png";
import brands5 from "@/../public/images/brand/image 60.png";
import Image from "next/image";

const Partners = () => {
  return (
    <section className=" mt-32">
      <FlowerHead title=" partners & clients" show={false} />
      <h4 className="  text-center font-bold text-base md:text-2xl text-gray-700  font-inter">
        We work with the best people
      </h4>
      <div className="brands grid grid-cols-2 place-items-center md:flex  md:flex-row justify-between h-[auto] md:h-[120px] mt-12 object-contain">
        <Image
          src={brands}
          alt="brands logo"
          className=" object-contain w-[100px] h-[100px]"
        />
        <Image
          src={brands1}
          alt="brands logo"
          className=" object-contain w-[100px] h-[100px]"
        />
        <Image
          src={brands2}
          alt="brands logo"
          className=" object-contain w-[100px] h-[100px]"
        />
        <Image
          src={brands3}
          alt="brands logo"
          className=" object-contain w-[100px] h-[100px]"
        />
        <Image
          src={brands4}
          alt="brands logo"
          className=" object-contain w-[100px] h-[100px]"
        />
        <Image
          src={brands5}
          alt="brands logo"
          className=" object-contain w-[100px] h-[100px]"
        />
      </div>
    </section>
  );
};

export default Partners;
