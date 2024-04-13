"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import ResumeDownload from "./ResumeDownload";
import { Link as Linkly } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="mb-16 md:mb-0 flex md:justify-center md:items-center -mt-14 md:mt-0">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Pranav  Keshav",
                1500,
                "Web  Developer",
                1500,
                "Pranav  Keshav",
                1500,
              ]}
              wrapper="span"
              speed={45}
              repeat={1}
              className="text-black dark:text-white"
            />
          </h1>
          <p className="dark:text-[#908d96] text-base sm:text-md mb-6 lg:text-lg text-slate-700">
            As a frontend developer pursuing Information Science and
            Engineering, I craft intuitive web experiences through React,
            JavaScript, and TailwindCSS.
            {/* My passion lies in leveraging
            cutting-edge technologies to deliver seamless user interactions. */}
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <ResumeDownload />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#e3e1ea] dark:bg-[#2f2b3a] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
