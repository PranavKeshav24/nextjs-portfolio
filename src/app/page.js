import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import NavbarMobile from "./components/NavbarMobile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col dark:bg-[#1a1625] bg-white">
      <Navbar />
      <NavbarMobile />
      <div className="container mt-24 mx-auto px-12 py-4 flex flex-col gap-8">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
