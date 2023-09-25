import Image from "next/image";
import React from "react";
import { PiQuotesLight } from "react-icons/pi";
import imagetest from "@/../public/images/testimonial.png";
import TestimonialSlider from "./testimonialsComponents/TestimonialSlider";
import { BsStarFill } from "react-icons/bs";

const Testimonial = () => {
  return (
    <section className=" mt-36">
      <div className="flex gap-32 justify-between select-none">
        <div className="w-1/2 flex flex-col gap-4">
          <h4 className=" text-2xl font-miniver font-normal text-green heading">
            Testimonial
          </h4>
          <p className="font-inter text-3xl font-extrabold text-gray-800 balance">
            Customer Review
          </p>
          <PiQuotesLight size={40} className=" text-green" />

          <TestimonialSlider />
        </div>
        <div className=" w-1/2 relative  select-none">
          <div className=" flex flex-col rounded-md gap-3 w-[400px] h-[auto] p-6 shadow-xl absolute -left-16 -bottom-16 bg-white">
            <div className=" flex justify-between text-gray-950 font-inter text-base font-extrabold">
              <p>Order Now</p> <p>10.00$</p>
            </div>

            <div className=" flex text-green gap-1">
              <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
              <BsStarFill />{" "}
            </div>
            <p className=" font-poppins text-gray-500 font-normal text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quia
              in. Suscipit quisquam reiciendis explicabo nihil cupiditate iste
              dignissimos corrupti nam, consequuntur nemo adipisci assumenda
              molestias in voluptatum voluptates sed.
            </p>
          </div>
          <Image src={imagetest} alt="food" className=" h-[auto] w-[500px] " />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
