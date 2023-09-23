import Image from "next/image";
import React from "react";
import Logo from "@/../public/images/Foodtuck.svg";
import Navlink from "./Navlink";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { PiHandbag } from "react-icons/pi";

const navlinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Menu",
    link: "/menu",
  },
  {
    id: 3,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 4,
    title: "Pages",
    link: "/page",
  },
  ,
  {
    id: 5,
    title: "About",
    link: "/about",
  },
  ,
  {
    id: 6,
    title: "Shop",
    link: "/shop",
  },
  ,
  {
    id: 7,
    title: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  return (
    <>
      <header className=" relative z-10">
        <div className="flex items-center justify-between  py-6 gap-10">
          <div className=" flex gap-6">
            <div>
              <Image src={Logo} height={100} width={100} priority alt="Logo" />
            </div>
            <nav className=" flex gap-4">
              {navlinks.map((x) => (
                <Navlink key={x.id} link={x.link} children={x.title} />
              ))}
            </nav>
          </div>

          <div className=" flex justify-around gap-4 items-center text-[20px] text-white">
            <RiSearchLine />
            <AiOutlineUser />
            <PiHandbag />
          </div>
        </div>
      </header>
    
    </>
  );
};

export default Header;
