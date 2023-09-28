"use client";
import React, { useEffect } from "react";
import flower from "@/../public/images/flower.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const FlowerHead = ({ title, show }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex relative flex-col justify-center md:items-center mt-32 md:mt-16">
      <h2
        className="relative capitalize text-3xl text-center text-gray-900  font-inter font-extrabold heading-text z-20"

        data-aos-easing="ease-in-sine"
        data-aos="fade-left"
      >
        {title}
      </h2>{" "}
      <Image
        src={flower}
        className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 "
        alt="Flower image"
      />
      {show === false ? (
        ""
      ) : (
        <p
          className=" balance text-center w-full md:w-1/2 p-3 text-gray-700 text-[18px] flex items-center justify-center
        z-20 "
        data-aos-easing="ease-in-sine"
        data-aos="fade-right" 
        data-aos-delay="100"  
        data-aos-anchor-placement="top-bottom"  >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          praesentium facere incidunt eius quae.
        </p>
      )}
    </div>
  );
};

export default FlowerHead;
