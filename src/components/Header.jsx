"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/../public/images/Foodtuck.svg";
import Navlink from "./Navlink";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { PiHandbag } from "react-icons/pi";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
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
const menuVar = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.4,
      ease: [0.52, 0, 0.9, 0.5],
      staggerChildren: 1
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      ease: [0.82, 1, 0.36, 1],
      delay: 0.05,
    },
  },
};
const linkVar = {
  initial: {
    y: "90vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};
const containerVar = {
  initial: {
    transition: {
      staggerChildren: 1,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      staggerChildren: .3,
      staggerDirection: 1,
    },
  },
};
const Header = () => {
  const [isOpen, setOpen] = useState(false);
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
          <div
            onClick={() => {
              setOpen(true);
            }}
          >
            <BiMenuAltRight size={50} />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={menuVar}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col gap-16 justify-center items-center absolute origin-top  md:hidden h-[100vh] right-0 top-0 w-2/3 bg-gray-800 font-poppins text-white"
              >
                <div>
                  <MdClear
                    size={30}
                    onClick={() => {
                      setOpen(false);
                    }}
                  />
                </div>
                <Image
                  src={Logo}
                  height={100}
                  width={100}
                  priority
                  alt="Logo"
                />
               <motion.nav
                    variants={containerVar}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    className=" flex gap-4 flex-col text-white text-base justify-center items-left"
                  >
                    {navlinks.map((x) => (
                      <motion.div
                        key={x.id}
                        variants={linkVar}
                        transition={{
                          delay: 0.05 * x.id,
                     
                        }}
                      >
                        <Navlink key={x.id} link={x.link} children={x.title} />
                      </motion.div>
                    ))}
                  </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
