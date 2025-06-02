import EducationSection from "../components/EducationSection.tsx";
import Footer from "../components/Footer.tsx";
import Hero from "../components/Hero.tsx";
import LinkGroup from "../components/LinkGroup.tsx";
import Navbar from "../components/Navbar.tsx";
import ProjectSection from "../components/ProjectSection.tsx";
import SkillsSection from "../components/SkillsSection.tsx";

export default function AboutPage() {
  return (
    <>
      <Navbar currentTab="about" />
      <Hero />
      <LinkGroup />
      <ProjectSection />
      <EducationSection />
      <SkillsSection />
      <Footer />
    </>
  );
}
