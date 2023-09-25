import React from "react";
import FlowerHead from "./FlowerHead";
import brands from "@/../public/images/brand/image 2.png";
import Image from "next/image";

const Partners = () => {
  return (
    <section className=" mt-32">
      <FlowerHead title=" partners & clients" show={false} />
      <h4 className="  text-center font-bold text-2xl text-gray-700  font-inter">
        We work with the best people
      </h4>
      <div className="brands">
        <Image src={brands} />
      </div>
    </section>
  );
};

export default Partners;
