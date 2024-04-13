"use client";
import Image from "next/image";
import regVector from "../../../public/images/Experience/regVector.png";
import realsStates from "../../../public/images/Experience/realsStates.png";
import { Element } from "react-scroll";

export default function ExperienceSection() {
  return (
    <Element name="Experience">
      <section
        className="flex justify-center items-center md:pt-14 pt-12"
        id="experience"
      >
        <div className="flex flex-col justify-center items-center md:pt-2">
          <h1 className="text-4xl text-center font-bold dark:text-white text-black mb-6 md:mb-8">
            Experience
          </h1>
          <div className="mx-auto">
            <ol className="relative border-s border-secondary-300 dark:border-gray-700">
              <li className="mb-10 ms-6 mx-auto max-w-md">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-100 rounded-full -start-3 ring-8 ring-primary-300 dark:ring-[#46424f] dark:bg-primary-900">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white bg-primary-300 dark:bg-[#46424f]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"
                    />
                  </svg>
                </span>
                <span className="flex dark:bg-card border dark:border-[#33353F] rounded-lg px-2 bg-[#e3e1ea] border-[#e3e1ea]">
                  <span className="flex  justify-center items-center w-1/5 mr-4">
                    <Image src={regVector} className="flex" />
                  </span>
                  <span className="flex flex-col justify-center ">
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-black dark:text-white">
                      Front-end Developer Intern
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-slate-700 dark:text-gray-500">
                      Aug 2023 - Nov 2023 · 4 months
                    </time>
                  </span>
                </span>
                <ul className="my-4 text-base font-normal text-slate-700 dark:text-cardText">
                  <li className="ms-6 list-disc">
                    Played a key role in designing and building an e-commerce
                    website for the startup.
                  </li>
                  <li className="ms-6 list-disc">
                    Contributed to the UI design, enhancing the user experience
                    and interface.
                  </li>
                  <li className="ms-6 list-disc">
                    Leveraged React, JavaScript, and TailwindCSS for building a
                    responsive and visually appealing website.
                  </li>
                  <li className="ms-6 list-disc">
                    Collaborated with the team to align the website with the
                    company’s goals and customer needs.
                  </li>
                </ul>
              </li>
              <li className="mb-10 ms-6 mx-auto max-w-md">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-100 rounded-full -start-3 ring-8 ring-primary-300 dark:ring-[#46424f] dark:bg-primary-900">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white bg-primary-300 dark:bg-[#46424f]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"
                    />
                  </svg>
                </span>
                <span className="flex dark:bg-card border dark:border-[#33353F] rounded-lg px-2 bg-[#e3e1ea] border-[#e3e1ea]">
                  <span className="flex  justify-center items-center w-1/5 mr-4">
                    <Image src={realsStates} className="flex" />
                  </span>
                  <span className="flex flex-col justify-center ">
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-black dark:text-white">
                      Front-end Developer Intern
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-slate-700 dark:text-gray-500">
                      Nov 2023 - Jan 2024 · 3 months
                    </time>
                  </span>
                </span>
                <ul className="my-4 text-base font-normal text-slate-700 dark:text-cardText">
                  <li className="ms-6 list-disc">
                    Worked with React, TailwindCSS and JavaScript to contribute
                    to the development of a dynamic website catering to online
                    real estate services.
                  </li>
                  <li className="ms-6 list-disc">
                    Played my role in crafting an intuitive user interface.
                  </li>
                  <li className="ms-6 list-disc">
                    My contribution helped lead to improvement in website
                    navigation metrics and contributed to a 25 % reduction in
                    page load times, enhancing overall user experience.
                  </li>
                  <li className="ms-6 list-disc">
                    Collaborated with the team to align the website with the
                    company’s goals and customer needs.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </Element>
  );
}
