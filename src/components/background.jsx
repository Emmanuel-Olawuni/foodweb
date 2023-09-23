import React from "react";
import Bg from "@/../public/images/Bg.png";

import Image from "next/image";

const Background = () => {
  return (
    <div className=" absolute  right-0 top-0 z-0 pointer-events-none">
      <Image
        src={Bg}
        height={1000}
        width={700}
        alt="background Image"
        className=""
      />

      
    </div>
  );
};

export default Background;
