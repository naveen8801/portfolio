import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import IntroductionSection from "@/components/IntroductionSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <h1 className="h-full box-border px-48 py-8 bg-red-500">
      <IntroductionSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </h1>
  );
}
