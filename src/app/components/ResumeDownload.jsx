import ResumePDF from "../../../public/Pranav_Keshav_Resume.pdf";
import Link from "next/link";

export default function ResumeDownload() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "resume.pdf";
    link.click();
  };
  return (
    <Link
      href="/_next/static/files/Pranav_Keshav_Resume.pdf"
      target="_blank"
      className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 dark:hover:bg-[#1a1625] hover:bg-white text-white mt-3"
    >
      <span className="block dark:hover:bg-slate-800 hover:bg-white hover:text-black dark:hover:text-white rounded-full px-5 py-2 text-center">
        View Resume
      </span>
    </Link>
  );
}
