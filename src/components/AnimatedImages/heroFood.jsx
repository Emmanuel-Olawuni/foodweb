"use client";
import React from "react";
import Food from "@/../public/images/food.png";
import Lettuce from "@/../public/images/lettuce.png";
import Leave from "@/../public/images/leaves.png";
import Leave2 from "@/../public/images/leaves2.png";
import Lettuce2 from "@/../public/images/lettuce2.png";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroFood = () => {
  return (
    <div className="relative hidden md:block ">
    
        <Image
          src={Food}
          alt="food"
          priority
          width="80%"
          className=" z-[80] pointer-events-none "
        />
      <div>
        <Image
          src={Lettuce}
          className="  pointer-events-none absolute -bottom-12 -left-20  w-[250px] z-[-1]"
          alt="food lettuce leaves"
        />
        <Image
          src={Lettuce2}
          className=" pointer-events-none  absolute top-16 left-[-90px]   -rotate-[25deg] w-[250px] z-[-1]"
          alt="food lettuce leaves"
        />
        <Image
          src={Leave}
          className="  pointer-events-none absolute right-40 -bottom-20 w-[250px] z-[-1]"
          alt="food lettuce leaves"
        />
        <Image
          src={Leave2}
          className="  pointer-events-none absolute inset-0 w-[250px] z-[-1]"
          alt="food lettuce leaves"
        />
      </div>
    </div>
  );
};

export default HeroFood;
