import React from "react";
import flower from "@/../public/images/flower.png";
import Image from "next/image";

const FlowerHead = ({title}) => {
  return (
    <div className="flex relative flex-col justify-center items-center">
      <h2 className="relative text-3xl text-gray-900  font-inter font-extrabold heading-text z-20">
      {title}
      </h2>{" "}
      <Image
        src={flower}
        className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 "
      />
      <p
        className=" balance text-center text-gray-700 text-lg flex items-center justify-center
        z-20 "
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
        praesentium facere incidunt eius quae.
      </p>
    </div>
  );
};

export default FlowerHead;
