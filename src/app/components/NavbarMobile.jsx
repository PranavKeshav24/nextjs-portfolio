"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import MenuOverlay from "./MenuOverlay";
import DarkModeSwitch from "./DarkModeSwitch";
import Roomy from "../../../public/images/Roomy.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
const NavbarMobile = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed md:hidden mx-auto bottom-0 left-0 right-0 z-20">
      <AnimatePresence>
        {navbarOpen && (
          <motion.ul
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5 }}
            className="flex z-20"
          >
            <MenuOverlay links={navLinks} />
          </motion.ul>
        )}
      </AnimatePresence>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 md:px-12 py-2 dark:bg-[#5e5a66] bg-white bg-opacity-100 border-t border-secondary-300 dark:border-none z-30 relative">
        <Link
          href={"/"}
          className="text-md dark:text-white text-secondary-700 font-semibold"
        >
          Pranav Keshav
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 rounded text-secondary-700 hover:text-secondary-700 hover:border-secondary-700 dark:border-slate-200 dark:text-slate-200 dark:hover:text-white dark:hover:border-white"
            >
              <Squares2X2Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 rounded text-secondary-700 hover:text-secondary-700 hover:border-secondary-700 dark:border-slate-200 dark:text-slate-200 dark:hover:text-white dark:hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;
