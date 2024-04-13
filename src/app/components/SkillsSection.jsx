"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import csvg from "../../../public/images/skills/c-1.svg";
import cppsvg from "../../../public/images/skills/c.svg";
import csssvg from "../../../public/images/skills/css-3.svg";
import htmlsvg from "../../../public/images/skills/html-1.svg";
import jssvg from "../../../public/images/skills/logo-javascript.svg";
import twsvg from "../../../public/images/skills/TailwindCSS.svg";
import javasvg from "../../../public/images/skills/java-4.svg";
import pythonsvg from "../../../public/images/skills/python-5.svg";
import reactsvg from "../../../public/images/skills/react-2.svg";
import gitsvg from "../../../public/images/skills/git-icon.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Element, animateScroll as scroll } from "react-scroll";

export default function SkillsSection() {
  const [displayed, setDisplayed] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView && !displayed) {
      controls.start("animate");
      setDisplayed(true);
    }
  }, [inView, displayed, controls]);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const skillTags = [
    { title: "C", logo: csvg },
    { title: "C++", logo: cppsvg },
    { title: "HTML5", logo: htmlsvg },
    { title: "CSS3", logo: csssvg },
    { title: "JavaScript", logo: jssvg },
    { title: "Tailwind", logo: twsvg },
    { title: "ReactJS", logo: reactsvg },
    { title: "Python", logo: pythonsvg },
    { title: "Java", logo: javasvg },
    { title: "Git", logo: gitsvg },
  ];

  return (
    <Element name="Skills">
      <section
        className="dark:text-white text-black flex flex-col justify-center items-center md:pt-14 pt-8"
        id="skills"
      >
        <div className="flex flex-col" ref={ref}>
          <div className="flex mx-auto justify-center items-center my-4">
            <h1 className="text-4xl text-center font-bold dark:text-white text-black mb-4">
              Skills
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {skillTags.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={controls}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <div className="flex flex-col items-center my-2">
                  <Image
                    src={skill.logo}
                    alt={skill.title}
                    className="h-14 w-14 mb-2 hover:scale-125 transition-transform duration-300 ease-in-out"
                  />
                  <div className="p-4 text-center">
                    <p className="dark:text-white text-black border-[#76737e]  rounded-full border-2 px-6 py-2 text-md">
                      {skill.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}
