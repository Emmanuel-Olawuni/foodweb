import React from "react";
import Logo from "@/../public/images/Foodtuck.svg";
import Image from "next/image";
import { SiMinutemailer } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";
import { BsEnvelopeOpen, BsClock } from "react-icons/bs";
import flower from "@/../public/images/flower.png";

const Footer = () => {
  return (
    <footer className="w-full relative no-padding">
      <Image
        alt="flower "
        src={flower}
        className=" absolute  -top-16 -left-16 md:-top-32 md:-left-16"
      />
      <div className=" flex flex-col md:flex-row  gap-8 justify-around items-start md:mt-10 bg-gray-100 py-8 px-2">
        <div className="flex flex-col gap-3">
          <Image src={Logo} priority alt="Logo" />
          <p className=" text-gray-700 text-base font-inter font-semibold">
            Subscribe our newsletter and get discount 25% off
          </p>
          <div className=" flex">
            <input
              type="text"
              placeholder="Enter Your Email"
              className=" h-[40px] w-[150px] bg-white  rounded-s-md placeholder:text-center focus:outline-none"
            />{" "}
            <button
              type="submit"
              className="flex justify-center items-center h-[40px] w-[50px] rounded-e-md bg-green"
            >
              <SiMinutemailer size={30} color="white" />
            </button>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <p className=" font-inter font-bold text-lg text-gray-800  ">
            Contact
          </p>
          <div className="flex justify-start gap-3 items-center font-poppins text-base text-gray-800 font-normal">
            <CiLocationOn size={18} className=" text-gray-600" /> Kolkata floor,
            India.
          </div>
          <div className=" flex justify-start gap-3 items-center font-poppins text-base text-gray-800 font-normal">
            <HiOutlinePhone size={18} className=" text-gray-600" />{" "}
            <a href="tel:+2348164109066">+234 816 410 9066</a>
          </div>
          <div className=" flex justify-start gap-3 items-center font-poppins text-base text-gray-800 font-normal">
            <BsEnvelopeOpen size={18} className=" text-gray-600" />{" "}
            <a href="mailto:emmanuelolawuni2001@gmail.com">
              emmanuelolawuni2001@gmail.com
            </a>
          </div>
          <div className=" flex justify-start gap-3 items-center font-poppins text-base text-gray-800 font-normal">
            <BsClock size={18} className=" text-gray-600" /> Sun - Sat / 10:
            00am - 8:00pm
          </div>
        </div>
        <div>
          <p className=" font-inter font-bold text-lg text-gray-800  ">Links</p>
          <ul className="font-poppins text-base text-gray-800 font-normal flex flex-col gap-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Our Menu</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-green text-white flex flex-col md:flex-row justify-center gap-3 md:justify-around items-center p-3 font-inter text-sm">
        <div>Copyright &copy; 2023. All right reserved.</div>
        <div className=" text-center p-2">
          Designed by Olawuni Emmanuel. Email:{" "}
          <a
            href="mailto:emmanuelolawuni2001@gmail.com"
            className=" underline underline-offset-2 decoration-white "
          >
            emmanuelolawuni2001@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
