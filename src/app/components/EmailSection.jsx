"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import EmailIcon from "../../../public/email.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import { Element } from "react-scroll";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const formInitalDetails = {
    email: "",
    subject: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitalDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };
  //   const JSONdata = JSON.stringify(data);
  //   const endpoint = "/api/send";

  //   // Form the request for sending data to the server.
  //   const options = {
  //     // The method is POST because we are sending data.
  //     method: "POST",
  //     // Tell the server we're sending JSON.
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // Body of the request is the JSON data we created above.
  //     body: JSONdata,
  //   };

  //   const response = await fetch(endpoint, options);
  //   const resData = await response.json();

  //   if (response.status === 200) {
  //     console.log("Message sent.");
  //     setEmailSubmitted(true);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    });

    setEmailSubmitted(true);
    let result = await response.json();
    setFormDetails(formInitalDetails);
    if (result.code === 200) {
      console.log("Sent successfully!");
    } else {
      console.log("Something went wrong!");
    }
  };

  return (
    <Element name="Contact">
      <section
        id="contact"
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div>
          <h5 className="text-xl font-bold dark:text-white text-black my-2">
            Let&apos;s Connect
          </h5>
          <p className="dark:text-cardText text-slate-700 mb-4 max-w-md">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>

          <div className="socials flex flex-row gap-2">
            <Link href="github.com">
              <Image
                src={GithubIcon}
                alt="Github Icon"
                className="dark:text-white text-black"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/pranav-keshav-271a19183/"
              target="_blank"
            >
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
            <Link href="mailto:pranavkeshav.connect@gmail.com" target="_blank">
              <Image src={EmailIcon} alt="Email-id Icon" />
            </Link>
            <Link
              href="https://www.instagram.com/pranavkeshav24/"
              target="_blank"
            >
              <Image src={InstagramIcon} alt="Instagram Icon" />
            </Link>
          </div>
        </div>
        <div>
          {emailSubmitted ? (
            <div className="flex items-center space-x-2 animate-fade-in justify-center">
              <CheckBadgeIcon className="w-8 h-8 text-green-500" />
              <p className="text-green-500 text-md">Email sent successfully!</p>
            </div>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="dark:text-white text-black block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formDetails.email}
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                  id="email"
                  required
                  className="dark:bg-[#18191E] border dark:border-[#33353F] bg-[#e3e1ea] placeholder-[#9CA2A9] dark:text-gray-100 text-slate-700 text-sm rounded-lg block w-full p-2.5"
                  placeholder="jacob@google.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="dark:text-white text-black block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  value={formDetails.subject}
                  onChange={(e) => onFormUpdate("subject", e.target.value)}
                  id="subject"
                  required
                  className="dark:bg-[#18191E] border dark:border-[#33353F] bg-[#e3e1ea] placeholder-[#9CA2A9] dark:text-gray-100 text-slate-700 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="dark:text-white text-black block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formDetails.message}
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                  id="message"
                  className="dark:bg-[#18191E] border dark:border-[#33353F] bg-[#e3e1ea] placeholder-[#9CA2A9] dark:text-gray-100 text-slate-700 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </Element>
  );
};

export default EmailSection;
