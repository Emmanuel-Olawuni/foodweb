import Image from "next/image";
import React from "react";
import blog from "@/../public/images/blog.png";
import { BsCalendar2Date } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

const NewsCard = () => {
  return (
    <div className=" flex flex-col p-3 bg-white shadow-lg shadow-gray-300 w-[400px] rounded-[5px]">
      <div>
        <Image src={blog} alt="blog Images" priority />
      </div>
      <div className="flex flex-col py-6 gap-4">
        <div className="flex justify-start gap-3 font-poppins text-[12px]  font-medium">
          <div className=" flex items-center justify-center gap-2 ">
            <BsCalendar2Date size={18} className=" text-green" /> 28 September
            1823
          </div>
          <div className=" flex items-center justify-center gap-2">
            {" "}
            <BiCommentDetail size={20} className=" text-green" /> Comments (03)
          </div>
        </div>
       
          <p  className=" font-inter text-gray-900 font-extrabold text-xl capitalize balance cursor-pointer">Chocolate truffle cake with honey flavor</p>
      
        
          <p className="font-inter text-gray-700 font-medium text-[14px] balance">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            voluptatem perspiciatis excepturi unde nostrum at provident sint
            sunt suscipit aperiam.
          </p>
       
        <div className=" flex items-center gap-2 text-gray-700  font-bold font-inter text-[14px] cursor-pointer">
          Read More <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
