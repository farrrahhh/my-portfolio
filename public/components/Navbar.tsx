"use client";

import  { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { styles } from "./styles";
import { navLinks } from "./constants/index";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt="logo" width={36} height={36} className="object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Farah &nbsp; <span className="sm:block hidden">| be #Mastery</span>
          </p>
        </Link>

        {/* NAV LINKS - DESKTOP */}
        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {/* MENU TOGGLE - MOBILE */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            width={28}
            height={28}
            className="object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* MOBILE MENU */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } cursor-pointer font-poppins font-medium text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                >
                  <Link href={`#${link.id}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;