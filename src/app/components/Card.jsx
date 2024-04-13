import Image from "next/image";
export default function Card({ logo, title, content, timeline, sty }) {
  // Fix: Add 'timeline' to props
  console.log(logo, "logo");
  return (
    <div className="flex items-center justify-center m-0 text-#fdfcfd">
      <div className="max-w-md mx-auto dark:bg-card bg-[#e3e1ea] rounded-xl shadow-md overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className={`h-full w-full object-cover md:h-full md:w-56 ${sty}`}
              src={logo}
              alt={title}
            />
          </div>
          <div className="p-8 md:pl-0 justify-center flex flex-col">
            <div className="uppercase tracking-wide text-sm text-secondary font-semibold text-secondary-500">
              {timeline}
            </div>
            <h2 className="block mt-1 leading-tight font-semibold dark:text-white text-black">
              {title}
            </h2>
            <p className="mt-2 dark:text-cardText text-slate-700">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
