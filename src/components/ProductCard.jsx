import React from "react";
import ProductImage from "@/../public/images/product.png";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="flex flex-col justify-center w-[300px]">
      <div className="productCardImag object-contain">
        <Image
          src={ProductImage}
          className=" h-[300px] w-[300px] object-contain" alt="food"
        />
      </div>
      <div className="productCardText flex flex-col items-center  justify-center text-center px-1 py-2">
        <h2 className=" font-inter text-gray-700 font-bold">Spaghetti </h2>
        <p className="font-inter text-gray-700 font-bold">26 Items</p>
      </div>
    </div>
  );
};

export default ProductCard;
