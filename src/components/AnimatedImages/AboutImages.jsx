"use client";
import React, { useEffect } from "react";
import Image1 from "@/../public/images/image1.png";
import Image2 from "@/../public/images/image2.png";
import Image3 from "@/../public/images/image3.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutImages = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="parent overflow-hidden">
      <div className="div1">
        <Image
          src={Image1}
          height={300}
          width={300}
          alt="image-food"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        />
      </div>
      <div className="div2">
        <Image
          src={Image2}
          height={300}
          width={300}
          alt="image-food"
          data-aos-delay="300"
          data-aos-easing="ease-in-sine"
          data-aos="fade-left"
        />
      </div>
      <div className="div3">
        <Image
          src={Image3}
          height={300}
          width={300}
          alt="image-food"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-delay="300"
        />
      </div>
    </div>
  );
};

export default AboutImages;
