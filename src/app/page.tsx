import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import IntroductionSection from "@/components/IntroductionSection";
import ProjectsSection from "@/components/ProjectsSection";
import RevealAnimation from "@/components/RevealAnimation";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <h1 className="h-full box-border px-16 p-2 md:px-24 lg:px-48 md:p-4 lg:p-8">
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
        <ProjectsSection />
      </RevealAnimation>
    </h1>
  );
}
