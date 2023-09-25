import React from "react";
import flower from "@/../public/images/flower.png";
import Image from "next/image";

const FlowerHead = ({title , show}) => {
  return (
    <div className="flex relative flex-col justify-center items-center mt-16">
      <h2 className="relative capitalize text-3xl text-gray-900  font-inter font-extrabold heading-text z-20">
      {title}
      </h2>{" "}
      <Image
        src={flower}
        className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 "
        alt="Flower image"
      />
      {
        show === false ? '' : (
          <p
        className=" balance text-center w-1/2 p-3 text-gray-700 text-[18px] flex items-center justify-center
        z-20 "
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
        praesentium facere incidunt eius quae.
      </p>
        )
      }
      
    </div>
  );
};

export default FlowerHead;
