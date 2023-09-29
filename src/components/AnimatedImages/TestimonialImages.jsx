'use client'
import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import imagetest from "@/../public/images/testimonial.png";
import { BsStarFill } from "react-icons/bs";
import Image from "next/image";

const TestimonialImages = () => {
    useEffect(()=> {
Aos.init()
    } , [])
  return (
    <div className=" w-full md:w-1/2 relative  select-none "    data-aos="fade-left">
      <div className=" flex flex-col rounded-md gap-3 w-[400px] h-[auto] p-6 shadow-xl absolute -left-8 -bottom-16 md:-left-16 md:-bottom-16 bg-white">
        <div className=" flex justify-between text-gray-950 font-inter text-base font-extrabold">
          <p>Order Now</p> <p>10.00$</p>
        </div>

        <div className=" flex text-green gap-1">
          <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
          <BsStarFill />{" "}
        </div>
        <p className=" font-poppins text-gray-500 font-normal text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia in.
          Suscipit quisquam reiciendis explicabo nihil cupiditate iste
          dignissimos corrupti nam, consequuntur nemo adipisci assumenda
          molestias in voluptatum voluptates sed.
        </p>
      </div>
      <Image src={imagetest} alt="food" className=" h-[auto] w-[500px] " />
    </div>
  );
};

export default TestimonialImages;
