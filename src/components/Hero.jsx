import Image from "next/image";
import React from "react";

import Button from "./Button";
import HeroFood from "./AnimatedImages/heroFood";


const Hero = () => {
  return (
    <div className="hero_container h-[80vh] md:h-[70vh] flex justify-center md:justify-start  items-center md:z-30 relative mt-[4rem] md:mt-0 ">
      <div className=" flex flex-around flex-col md:flex-row items-center justify-center">
        <div className=" flex flex-col gap-5">
          <p className=" font-miniver text-2xl md:text-lg text-green  font-normal">
            Healthy & Tasty Food
          </p>
          <h3 className=" font-inter text-6xl leading-[70px] font-extrabold text-gray-800 text-left balance">
            Enjoy Healthy Life & Tasty Food.
          </h3>
          <p className="balance text-xl md:text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            delectus quasi ad excepturi. Perspiciatis sequi impedit nam.
          </p>
          <div className="flex gap-3">
            <Button buttonTypes="normal">Show More</Button>
            <Button buttonTypes="invert">Place an Order</Button>
          </div>
        </div>
        <HeroFood />
       
      </div>

      
    </div>
  );
};

export default Hero;
