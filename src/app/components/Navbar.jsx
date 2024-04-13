"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import DarkModeSwitch from "./DarkModeSwitch";

const navLinks = [
  {
    title: "About",
  },
  {
    title: "Skills",
  },
  {
    title: "Experience",
  },
  {
    title: "Projects",
  },
  {
    title: "Education",
  },
  {
    title: "Contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="md:fixed hidden md:block mx-auto top-0 left-0 right-0 z-10 dark:bg-[#46424f] bg-white">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 md:px-12 py-2">
        <Link
          href={"/"}
          className="text-xl md:text-2xl dark:text-white text-secondary-700 font-semibold"
        >
          Pranav Keshav
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            {/* <span>
              <DarkModeSwitch />
            </span> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
