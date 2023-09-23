'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ link, children }) => {
  const pathname = usePathname();
  const active = pathname === link
  return (
    <>
      <Link href={link} className={`${active ? 'underline underline-offset-2 decoration-[3px] underline-green decoration-green text-gray-900 font-semibold' : 'text-gray-700'}  capitalize text-base font-poppins `}>{children} </Link>
    </>
  );
};

export default Navlink;
