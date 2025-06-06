import { StaticImageData } from "next/image";

interface IIntroduction {
  name: string;
  currentPosition: string;
  currentCompany: string;
  companyWebsiteURL: string;
  about: string;
  profileImage: StaticImageData;
}

interface IEducation {
  title: string;
  college: string;
  grade: string;
  start: string;
  end: string;
}

interface IProjects {
  title: string;
  sourceCodeLink?: string;
  liveLink?: string;
  description: string;
  technologies: string[];
}

interface ILinks {
  github: string;
  twitter: string;
  email: string;
  resume: string;
  linkedin: string;
}

interface IExperience {
  company: string;
  position: string;
  start: string;
  end?: string;
  contributions: string[];
  companyWebsiteURL: string;
}

interface IIOpenSourceContribution {
  repoName: string;
  commitsLink: string;
}

export interface IData {
  Introduction: IIntroduction;
  Education: IEducation[];
  Skills: string[];
  Experience: IExperience[];
  Projects: IProjects[];
  Links: ILinks;
  OpenSourceContributions: IIOpenSourceContribution[];
}
