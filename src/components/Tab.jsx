"use client";
import React, { useState } from "react";
import { food } from "@/utils/foodmenu";
import TabContent from "./Tabs/TabContent";

const Tab = () => {
  const [active, setActive] = useState(1);

  const setActiveState = (key) => {
    setActive(key);
    console.warn(active);
  };
  return (
    <div>
      <div className="tabHeader flex items-center p-2  cursor-pointer -tracking-tighter justify-center border-b font-poppins text-base font-medium capitalize text-gray-700 gap-3 first-letter:capitalize">
        {food.map((x) => (
          <p
            key={x.id}
            onClick={() => setActiveState(x.id)}
            className={active === x.id ? " underline underline-offset-4 decoration-[3px] decoration-green" : ""}
          >
            {x.title}
          </p>
        ))}
      </div>
      <div>
        <TabContent id={active} type={food.find((x) => x.id === active)} />
      </div>
    </div>
  );
};

export default Tab;
