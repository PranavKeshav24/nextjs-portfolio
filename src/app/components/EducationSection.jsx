"use client";
import Card from "./Card";
import rnsit from "../../../public/images/Education/rnsit.png";
import srch from "../../../public/images/Education/srch.png";
import { Element } from "react-scroll";

export default function EducationSection() {
  const education = [
    {
      title: "RNS Institute of Technology",
      logo: rnsit,
      description:
        "Pursuing Bachelor of Engineering in Information Science and Engineering",
      time: "2022-2026",
      sty: "scale-50",
    },
    {
      title: "Sri Chaitanya PU College",
      logo: srch,
      description: "PU in Physics, Chemistry, Math, and Computer Science",
      time: "2020-2022",
      sty: "scale-60",
    },
  ];

  return (
    <Element name="Education">
      <section
        className="md:grid md:grid-cols-2 md:items-center flex-col md:mt-4 pt-12 md:pt-0"
        id="education"
      >
        <div className="">
          <h1 className="text-4xl text-center justify-center flex items-center font-bold dark:text-white text-black mb-4 md:h-screen">
            Education
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          {console.log(education[0].logo, "logo print")}
          {education.map((educationItem, index) => (
            <Card
              key={index}
              logo={educationItem.logo}
              title={educationItem.title}
              content={educationItem.description}
              timeline={educationItem.time}
              sty={educationItem.sty}
            />
          ))}
        </div>
      </section>
    </Element>
  );
}
