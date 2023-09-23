import React from "react";
import Image1 from "@/../public/images/image1.png";
import Image2 from "@/../public/images/image2.png";
import Image3 from "@/../public/images/image3.png";
import Image from "next/image";
import Button from "./Button";
import { BsPlay } from "react-icons/bs";

const About = () => {
  return (
    <section className=" mt-24">
      <div className="flex  m-auto items-center justify-around">
        <div className="parent">
          <div className="div1">
            <Image src={Image1} height={300} width={300} />
          </div>
          <div className="div2">
            <Image src={Image2} height={300} width={300} />
          </div>
          <div className="div3">
            <Image src={Image3} height={300} width={300} />
          </div>
        </div>

        <div className="w-1/3 flex gap-4 flex-col">
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
              <div className="  flex items-center justify-center gap-2 ">
                <div className="w-[50px] h-[50px] rounded-full bg-green grid place-items-center">
                  <BsPlay color="white" size={30} className="" />
                </div>
                <p className=" text-gray-900 font-inter font-semibold text-sm">
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
