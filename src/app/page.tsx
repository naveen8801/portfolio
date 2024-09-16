import EducationSection from "./../components/EducationSection";
import ExperienceSection from "./../components/ExperienceSection";
import IntroductionSection from "./../components/IntroductionSection";
import ProjectsSection from "./../components/ProjectsSection";
import RevealAnimation from "./../components/RevealAnimation";
import SkillsSection from "./../components/SkillsSection";

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
        <ProjectsSection />
      </RevealAnimation>
      <div className="flex items-center justify-center">
        <iframe
          width="500px"
          height="700px"
          src="https://formi-verse.vercel.app//forms/66b09420f3d2488f67d1f2c4?userId=66b0669d603fc7b8aea7c886"
          title="FormiVerse"
        ></iframe>
      </div>
    </h1>
  );
}
