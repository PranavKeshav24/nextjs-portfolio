import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="relative group">
      <div
        className="h-52 md:h-72 rounded-t-xl relative overflow-hidden"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"
        >
          <Link href={gitUrl} className="link">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:text-white" />
            </motion.div>
          </Link>
          <Link href={previewUrl} className="link">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:text-white" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
      <div className="dark:text-white text-black rounded-b-xl bg-[#e3e1ea] dark:bg-card py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="dark:text-cardText text-slate-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
