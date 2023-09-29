"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image3 from "@/../public/images/image3.png";
import Hand from "@/../public/images/hand.png";
import Image from "next/image";
import Lettuce from "@/../public/images/leftImage2.png";


const ChooseImages = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="imagecontainer relative">
      <div className="choose1">
        <Image src={Hand} width={300} alt="food" data-aos="fade-down" data-aos-anchor-placement="center-bottom"/>
      </div>
      <div className="choose2 ">
        <Image src={Image3} priority alt="food" data-aos="fade-up"/>
      </div>
      <div className=" absolute -right-6 -top-4 -z-10">
        <Image src={Lettuce} alt="lettuce" />
      </div>
    </div>
  );
};

export default ChooseImages;
