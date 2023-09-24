import Image from "next/image";
import React from "react";
import leftImage from "@/../public/images/leftImage2.png";
import ProductCard from "./ProductCard";
import FlowerHead from "./FlowerHead";

const Category = () => {
  return (
    <section className=" relative">
      <div className=" absolute top-[-70px] left-[-170px] z-10 object-contain h-[220px] w-[220px]">
        <Image src={leftImage} className=" object-contain" alt="food" />
      </div>

      <FlowerHead title='Food category'/>

      <ProductCard />
    </section>
  );
};

export default Category;
