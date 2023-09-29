import React from "react";
import vendor from "@/../public/images/vendor.png";
import Image from "next/image";
import {
  BiLogoFacebook,
  BiLogoPinterest,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

const teamMembers = [
  {
    id: 1,
    name: "Mark Henry",
    title: "Owner",
  },
  {
    id: 2,
    name: "Lucky Helen",
    title: "Chef",
  },
  {
    id: 3,
    name: "Moon Helen",
    title: "Founder",
  },
  {
    id: 4,
    name: "Tom Monrow",
    title: "Specialist",
  },
];
const TeamCard = () => {
  return(
    <div className=" flex flex-col md:flex-row md:gap-6 gap-32 items-center justify-center">
      {
         teamMembers.map((member) => (
          <div key={member.id} className=" relative flex justify-center items-center w-[200px] h-[200px] flex-col">
            <Image src={vendor} alt="cook" width="200" height="200" />
            <p className=" text-base font-inter font-extrabold text-gray-800 ">
              {member.name}
            </p>
            <p className=" text-sm font-poppins font-semibold text-gray-600">
              {member.title}
            </p>
            <div className="flex flex-col absolute right-4 top-2 gap-2">
              <BiLogoFacebook
                size={30}
                className=" text-gray-900 font-semibold bg-gray-300 p-1 rounded-[2px] hover:bg-green hover:text-white cursor-pointer transition-all  duration-300 ease-in"
              />
              <BiLogoTwitter
                size={30}
                className=" text-gray-900 font-semibold bg-gray-300 p-1 rounded-[2px] hover:bg-green hover:text-white cursor-pointer transition-all  duration-300 ease-in"
              />
              <BiLogoYoutube
                size={30}
                className=" text-gray-900 font-semibold bg-gray-300 p-1 rounded-[2px] hover:bg-green hover:text-white cursor-pointer transition-all  duration-300 ease-in"
              />
              <BiLogoPinterest
                size={30}
                className=" text-gray-900 font-semibold bg-gray-300 p-1 rounded-[2px] hover:bg-green hover:text-white cursor-pointer transition-all  duration-300 ease-in"
              />
            </div>
          </div>
        ))
      }
    </div>
  )
};

export default TeamCard;
