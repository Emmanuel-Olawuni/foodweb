import Image from "next/image";
import React from "react";
import Logo from "@/../public/images/Foodtuck.svg";
import Navlink from "./Navlink";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { PiHandbag } from "react-icons/pi";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";

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
      <header className=" relative z-[200]">
        <div className="hidden md:flex   items-center justify-between  py-6 gap-10">
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

          <div className=" flex justify-around gap-4 items-center text-[20px] text-white  cursor-pointer">
            <RiSearchLine />
            <AiOutlineUser />
            <PiHandbag />
          </div>
        </div>
        <div className="fixed md:hidden flex justify-around items-center top-0 left-0 w-full bg-gray-100 h-[12vh] z-[100] p-3">
          <div>
            <Image src={Logo} alt="Logo" />
          </div>
          <div>
            <BiMenuAltRight size={50} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
