import Image from "next/image";
import React from "react";
import { PiQuotesLight } from "react-icons/pi";
import imagetest from "@/../public/images/testimonial.png";
import TestimonialSlider from "./testimonialsComponents/TestimonialSlider";
import { BsStarFill } from "react-icons/bs";
import TestimonialImages from "./AnimatedImages/TestimonialImages";

const Testimonial = () => {
  return (
    <section className=" mt-36">
      <div className="flex gap-32 justify-between select-none flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h4 className=" text-2xl font-miniver font-normal text-green heading">
            Testimonial
          </h4>
          <p className="font-inter text-3xl font-extrabold text-gray-800 balance">
            Customer Review
          </p>
          <PiQuotesLight size={40} className=" text-green" />

          <TestimonialSlider />
        </div>
       <TestimonialImages />
      </div>
    </section>
  );
};

export default Testimonial;
