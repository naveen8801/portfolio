import { IData } from "./../types/index";

export const data: IData = {
  Introduction: {
    name: "Naveen",
    bio: "Founding Software Engineer",
    currentCompany: "StackGuardian",
    about: "",
    profileImage: "", // Add image path
  },
  Education: [
    {
      title:
        "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      college: "Kurukshetra University (JMIT), India",
      grade: "8.66 CGPA",
      start: "2019",
      end: "2023",
    },
  ],
  Skills: {
    languages: ["JavaScript", "TypeScript", "Python", "C++", "Python"],
    frameworks: ["ReactJS", "NextJS", "ExpressJS", "Python Flask", "Django"],
  },
  Experience: [
    {
      company: "StackGuardian",
      position: "Founding Software Engineer",
      contributions: [
        "Investigating and resolving issues reported by clients, ensuring timely responses and resolutions",
        "Maintaining an understanding of industry trends and emerging technologies to ensure the company's web applications remain up-to-date and competitive",
        "Implemented core functionalities using ReactJS like server-side pagination, and server-side filtering which reduced the amount of data that needed to be transferred over the network and improved the application's overall performance.",
        "Worked on integration module of backend Django API and implemented functionality to support bulk accounts integration to the StackGuardian dashboard.",
      ],
      isPresent: true,
      start: "Feb 2023",
    },
    {
      company: "StackGuardian",
      position: "Frontend Engineer Intern",
      contributions: [
        "Primarily working with ReactsJS to develop and implement features on the StackGuardian frontend repository.",
        "Working with Django to fix minor bugs related to the StackGuardian backend repository",
        "Worked with Terraform (Infrastructure as code tool) & OPA (Open Policy Agent)",
        "Contributing to Tirith (StackGuardian Policy Builder)",
      ],
      start: "Nov 2021",
      end: "Feb 2023",
    },
    {
      company: "GoGlocal",
      position: "Frontend Developer Intern",
      start: "Aug 2022",
      end: "Oct 2022",
      contributions: [
        "Implemented features like SignIn/SignUp flows and questionnaire forms using ReactJS",
        "Worked on cataloging module to enhance and introduce a user-friendly interface.",
        "Worked with Django to fix minor bugs on the backend",
      ],
    },
  ],
  Projects: [
    {
      title: "gformJS",
      description:
        "A CLI tool to create Google forms through JSON file. Implemented authorization via google OAuth",
      sourceCodeLink: "https://github.com/naveen8801/gFormJS",
      technologies: ["JavaScript", "ReactJS"],
    },
    {
      title: "VoteMe",
      description:
        "Real-time voting web applications through which users can create and share polls. Check results in real-time & with ease.",
      sourceCodeLink: "https://github.com/naveen8801/VoteMe-webapp",
      technologies: [
        "JavaScript",
        "ReactJS",
        "ExpressJS",
        "NodeJS",
        "MongoDB",
        "Socket.io",
      ],
    },
  ],
  Links: {
    github: "https://github.com/naveen8801",
    twitter: "",
    email: "naveensharma10d@gmail.com",
  },
};