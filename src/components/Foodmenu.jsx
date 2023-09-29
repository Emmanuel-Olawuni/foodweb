import React from "react";
import FlowerHead from "./FlowerHead";
import Tab from "./Tab";

const Foodmenu = () => {
  return (
    <section className="w-full">
      <FlowerHead title="Our Food Menu" />
      <Tab />
      <div className=" text-green  m-auto w-[150px] p-3   font-inter border border-green rounded-[10px] cursor-pointer  font-semibold flex items-center justify-center shadow-sm ">
        View Menu
      </div>
    </section>
  );
};

export default Foodmenu;
