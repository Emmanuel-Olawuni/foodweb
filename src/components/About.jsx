import React from "react";

import Button from "./Button";
import { BsPlay } from "react-icons/bs";
import AboutImages from "./AnimatedImages/AboutImages";

const About = () => {
  return (
    <section className=" mt-24">
      <div className="flex flex-col md:flex-row m-auto items-center justify-around">
  <AboutImages />
        <div className="md:w-1/3 flex gap-8 md:gap-4 flex-col">
          <h4 className=" text-2xl font-miniver font-normal text-green heading">
            About Us
          </h4>
          <p className="font-inter text-3xl font-extrabold text-gray-800 balance">
            Food is an important part Of a balanced Diet
          </p>

          <p className=" font-inter text-gray-600 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
            ducimus saepe sapiente eos laboriosam ipsa amet corrupti temporibus
            quod, delectus voluptates est. Voluptates alias suscipit iure ipsum
            earum, officiis eius!
          </p>
          <div className="flex gap-[10px]">
            <Button buttonTypes="normal">Show More</Button>

            <div>
              <div className="  flex items-center justify-center gap-2 cursor-pointer ">
                <div className="w-[50px] h-[50px] rounded-full bg-green grid place-items-center">
                  <BsPlay color="white" size={30} className="" />
                </div>
                <p className=" text-gray-900 font-poppins font-semibold text-sm cursor-pointer">
                  Watch Video
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
