import React from "react";
import NavLink from "./NavLink";
import {
  ComputerDesktopIcon as Projects,
  UserIcon as About,
  BriefcaseIcon as Experience,
  PaperAirplaneIcon as Contact,
  AcademicCapIcon as Education,
  LightBulbIcon as Skills,
} from "@heroicons/react/24/outline";
import { Link as Linkly } from "react-scroll";

const icons = {
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Contact,
};

const MenuOverlay = ({ links }) => {
  return (
    <ul className="py-6 mb-2 mx-2 w-screen items-center grid border border-secondary-300 grid-cols-3 text-center dark:bg-[#5e5a66] bg-white rounded-xl ease-in gap-y-2 dark:border-none z-20">
      {links.map((link, index) => {
        const Icon = icons[link.title];
        return (
          <li key={index}>
            <div className="flex flex-col">
              {/* <div className="flex justify-center items-center text-black dark:text-white">
                {Icon && <Icon className="h-5 w-5" />}
              </div> */}
              <Linkly
                activeClass="active"
                to={link.title}
                spy={true}
                smooth={true}
                duration={500}
                className="flex justify-center items-center text-black dark:text-white hover:text-secondary-500"
              >
                {Icon && <Icon className="h-5 w-5" />}
              </Linkly>
              <NavLink title={link.title} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOverlay;

{
  /* <Linky
      activeClass="active"
      to={title}
      spy={true}
      smooth={true}
      duration={500}
      className="block cursor-pointer py-2 pl-3 pr-4 dark:text-white sm:text-md rounded md:p-0 hover:text-secondary-500 text-black"
    >
      {title}
    </Linky> */
}
