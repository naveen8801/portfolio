import OpenSourceSection from "@/components/OpenSourceSection";
import EducationSection from "./../components/EducationSection";
import ExperienceSection from "./../components/ExperienceSection";
import IntroductionSection from "./../components/IntroductionSection";
import ProjectsSection from "./../components/ProjectsSection";
import RevealAnimation from "./../components/RevealAnimation";
import SkillsSection from "./../components/SkillsSection";
import { FaMessage } from "react-icons/fa6";

export default function Home() {
  return (
    <h1 className="h-full box-border px-16 p-2 md:px-24 lg:px-80 md:p-4 lg:p-8">
      <RevealAnimation>
        <IntroductionSection />
      </RevealAnimation>
      <RevealAnimation>
        <EducationSection />
      </RevealAnimation>
      <RevealAnimation>
        <SkillsSection />
      </RevealAnimation>
      <RevealAnimation>
        <ExperienceSection />
      </RevealAnimation>
      <RevealAnimation>
        <OpenSourceSection />
      </RevealAnimation>
      <RevealAnimation>
        <ProjectsSection />
      </RevealAnimation>
      <button
        className="text-blue-500 dark:text-blue-400  font-semibold text-center flex gap-2 items-center"
        id="formiverse-form"
      >
        Don't be shy, say hi !
        <FaMessage size={15} className="text-slate-600 dark:text-slate-400" />
      </button>
    </h1>
  );
}
