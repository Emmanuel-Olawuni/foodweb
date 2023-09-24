import Image from "next/image";
import React from "react";
import Food from "@/../public/images/food.png";
import Lettuce from "@/../public/images/lettuce.png";
import Leave from "@/../public/images/leaves.png";
import Leave2 from "@/../public/images/leaves2.png";
import Lettuce2 from "@/../public/images/lettuce2.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="h-[70vh] flex  items-center z-30 relative">
      <div className=" flex flex-around flex-col md:flex-row items-center justify-center">
        <div className=" flex flex-col gap-5">
          <p className=" font-miniver  text-lg text-green  font-normal">
            Healthy & Tasty Food
          </p>
          <h3 className=" font-inter text-6xl leading-[70px] font-extrabold text-gray-800 balance">
            Enjoy Healthy Life & Tasty Food.
          </h3>
          <p className="balance text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            delectus quasi ad excepturi. Perspiciatis sequi impedit nam.
          </p>
          <div className="flex gap-3">
            <Button buttonTypes="normal">Show More</Button>
            <Button buttonTypes="invert">Place an Order</Button>
          </div>
        </div>
        <div className="relative">
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
        alt="food lettuce leaves"     />
            <Image
              src={Lettuce2}
              className=" pointer-events-none  absolute top-16 left-[-90px]   -rotate-[25deg] w-[250px] z-[-1]"
          alt="food lettuce leaves"   />
            <Image
              src={Leave}
              className="  pointer-events-none absolute right-40 -bottom-20 w-[250px] z-[-1]"
          alt="food lettuce leaves"   />
            <Image
              src={Leave2}
              className="  pointer-events-none absolute inset-0 w-[250px] z-[-1]"
          alt="food lettuce leaves"   />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Hero;
