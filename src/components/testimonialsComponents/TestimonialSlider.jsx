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
      " I stumbled upon this food website, and it has been a game-changer for me! The recipes are not only delicious but also easy to follow. I never considered myself a great cook, but now my friends and family think I'm a gourmet chef. Thanks to this website, I'm enjoying homemade meals like never before! ",
  },
  {
    id: 2,
    image: image2,
    name: "Esther Praise",
    job: "Chef",
    testimonial:
      "  I can't thank this food website enough for revolutionizing my meal planning. The variety of recipes is outstanding, and the step-by-step instructions make cooking a breeze. My favorite part is the diverse range of cuisines and dietary options available. It caters to everyone's tastes and needs, making it my go-to source for cooking inspiration. ",
  },
  {
    id: 3,
    image: image3,
    name: "Anuoluwapo Louis",
    job: "Customer",
    testimonial:
    "This food website is my go-to resource for culinary inspiration. The recipes are not only mouthwatering but also come with stunning food photography that makes me want to try every dish. The site's user-friendly interface and detailed ingredient lists make grocery shopping a breeze. Thanks to this website, I've expanded my culinary horizons and can confidently prepare restaurant-quality meals at home!"},
];
const TestimonialSlider = () => {
  const [activeSlider, setActiveSlider] = useState(0);
  const decreaseState = () => {
    const firstSlide = activeSlider === 0;
    const newIndex = firstSlide ? testimonialData.length - 1 : activeSlider - 1;
    setActiveSlider(newIndex);
  };
  const increaseState = () => {
    const lastSlide = activeSlider === testimonialData.length - 1;
    const newIndex = lastSlide ? 0 : activeSlider + 1;
    setActiveSlider(newIndex);
  };
  
  return (
    <>
      <div className="flex relative flex-col gap-5">
        <p className=" text-gray-600 font-poppins text-base  h-[210px] md:h-[150px]">
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
