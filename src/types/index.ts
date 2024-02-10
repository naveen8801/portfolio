interface IIntroduction {
  name: string;
  bio: string;
  currentCompany: string;
  about: string;
  profileImage: string;
}

interface IEducation {
  title: string;
  college: string;
  grade: string;
  start: string;
  end: string;
}

interface ISkills {
  languages: string[];
  frameworks: string[];
}

interface IProjects {
  title: string;
  sourceCodeLink: string;
  description: string;
  technologies: string[];
}

interface ILinks {
  github: string;
  twitter: string;
  email: string;
}

interface IExperience {
  company: string;
  position: string;
  start: string;
  end?: string;
  contributions: string[];
  isPresent?: boolean;
}

export interface IData {
  Introduction: IIntroduction;
  Education: IEducation[];
  Skills: ISkills;
  Experience: IExperience[];
  Projects: IProjects[];
  Links: ILinks;
}
