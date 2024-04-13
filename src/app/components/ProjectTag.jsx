import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "dark:text-white text-black border-primary-500"
    : "text-slate-600 border-slate-600 dark:hover:border-white hover:border-black";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-2 text-lg cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
