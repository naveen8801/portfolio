export interface IData {
  Introduction: {
    name: string;
    bio: string;
    currentCompany: string;
    about: string;
    profileImage: string;
  };
  Education: {
    title: string;
    college: string;
    grade: string;
    start: string;
    end: string;
  }[];
  Skills: { languages: string[]; frameworks: string[] };
  Experience: {
    company: string;
    position: string;
    start: string;
    end?: string;
    contributions: string[];
    isPresent?: boolean;
  }[];
  Projects: {
    title: string;
    sourceCodeLink: string;
    description: string;
    technologies: string[];
  }[];
  Links: {
    github: string;
    twitter: string;
    email: string;
  };
}
