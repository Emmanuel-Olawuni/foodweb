"use client";

import React, { useState } from "react";
import image1 from "@/../public/images/testimonials/1.jpg";
import image2 from "@/../public/images/testimonials/2.jpg";
import image3 from "@/../public/images/testimonials/3.jpg";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const testimonialData = [
  {
    id: 1,
    image: image1,
    name: "Nini Oyindamola",
    job: "Customer",
    testimonial:
      "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex exercitationem corrupti repellendus necessitatibus soluta dolorum natus assumenda ipsam! Ea ad perferendis placeat enim temporibus explicabo alias animi molestias? Cumque!",
  },
  {
    id: 2,
    image: image2,
    name: "Esther Praise",
    job: "Customer",
    testimonial:
      "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex exercitationem corrupti repellendus necessitatibus soluta dolorum natus assumenda ipsam! Ea ad perferendis placeat enim temporibus explicabo alias animi molestias? Cumque!",
  },
  {
    id: 1,
    image: image3,
    name: "Anuoluwapo Louis",
    job: "Customer",
    testimonial:
      "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex exercitationem corrupti repellendus necessitatibus soluta dolorum natus assumenda ipsam! Ea ad perferendis placeat enim temporibus explicabo alias animi molestias? Cumque!",
  },
];
const TestimonialSlider = () => {
  const [activeSlider, setActiveSlider] = useState(1);
  const decreaseState = () => {
    const firstSlide = activeSlider === 1;
    const newIndex = firstSlide ? testimonialData.length - 1 : activeSlider - 1;
    setActiveSlider(newIndex);
  };
  const increaseState = () => {
    const lastSlide = activeSlider === testimonialData.length - 1;
    const newIndex = lastSlide ? 1 : activeSlider + 1;
    setActiveSlider(newIndex);
  };
  return (
    <>
      <div className="flex relative flex-col gap-5">
        <p className=" text-gray-600 font-poppins text-base">
          {testimonialData[activeSlider].testimonial}
        </p>
        <div className="flex gap-3">
          <Image
            src={testimonialData[activeSlider].image}
            className=" rounded-full h-[50px] w-[50px] object-contain"
            alt={testimonialData[activeSlider].name}
          />
          <div className=" flex flex-col gap-1 ">
            <p className="font-inter text-base font-extrabold text-gray-900">
              {testimonialData[activeSlider].name}
            </p>{" "}
            <p className="font-inter text-base font-semibold text-gray-600">
              {testimonialData[activeSlider].job}
            </p>
          </div>
          <div className=" flex gap-5 items-center justify-center text-green absolute bottom-2 right-3 ">
            <AiOutlineArrowLeft
              size={20}
              className="cursor-pointer "
              onClick={decreaseState}
            />
            <AiOutlineArrowRight
              size={20}
              className="cursor-pointer"
              onClick={increaseState}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
