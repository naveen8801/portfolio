import { IData } from "./../types/index";
//@ts-ignore
import img from "./../assets/face-2026.jpeg";

export const data: IData = {
  Introduction: {
    name: "Naveen",
    currentPosition: "Founding Software Engineer",
    currentCompany: "StackGuardian",
    about:
      "Hi there! I'm a founding software engineer at StackGuardian, building the platform across the product dashboard, backend services, component libraries, and open-source tooling. I love finding patterns and connecting dots, and contributing to open source.",
    profileImage: img,
    companyWebsiteURL: "https://www.stackguardian.io/",
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
  Skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "C++",
    "ReactJS",
    "NextJS",
    "Redux",
    "Tailwind CSS",
    "shadcn/ui",
    "AWS Cloudscape",
    "Monaco Editor",
    "NodeJS",
    "ExpressJS",
    "Django",
    "Flask",
    "AWS Lambda",
    "DynamoDB",
    "Terraform",
    "Docker",
    "GitHub Actions",
    "Vite",
    "Turborepo",
    "Jest",
    "Playwright",
  ],
  Experience: [
    {
      company: "StackGuardian",
      position: "Founding Software Engineer",
      contributions: [
        "Designed and shipped most of the StackGuardian dashboard's major product surfaces — workflows, stacks, template library, cloud integrations, RBAC, cost insights, and onboarding — alongside backend work across the Django API, Python core library, and AWS Lambda services.",
        "Led frontend development of SGCode (Infra2Code), which converts discovered cloud resources into Terraform using AI agents: built the cloud inventory views, the chat workbench with streaming code generation, and resource grouping for AWS, Azure and GCP.",
        "Set up two React component libraries from scratch, consumed by the product as versioned packages: a browser-based IDE (Monaco editor, file explorer, Terraform plan log viewer) and sg-components-library, the dashboard's component library (authentication screens, onboarding flows, shared UI); owned releases v1 to v5 and onboarded 6+ contributors.",
        "Built the service that executes user-written JavaScript inside no-code forms: a TypeScript AWS Lambda sandboxing untrusted code with isolated-vm, exposing controlled fetch and AWS/Azure SDK access.",
        "Built AWS and Azure account onboarding across frontend and backend: AWS Organizations and Azure subscription discovery, integration groups with background provisioning, and OIDC keyless authentication.",
        "Migrated the frontend toolchain from Create React App to Vite, npm to pnpm, Tailwind v4 and Node 22, cutting CI build-and-deploy time from ~7.5 to ~1.5 minutes (5x) at ~10 deploys/day.",
        "Sole author of StackGuardian's published Backstage plugin (@stackguardian/backstage-plugin-sg-library): deploy stacks and workflows from inside Backstage using schema-driven no-code forms.",
      ],
      end: "Present",
      start: "Jul 2023",
      companyWebsiteURL: "https://www.stackguardian.io/",
    },
    {
      company: "StackGuardian",
      position: "Frontend Engineer Intern",
      contributions: [
        "Shipped production features including RBAC role-bindings UI, user invitations, and continuous workflow-run log streaming with reduced request load.",
        "Built the organization overview dashboards (Infracost cost, infrastructure drift, policy compliance) and the AWS cloud connector flow; co-drove the 2022 dashboard-wide redesign.",
        "Built the GitHub App webhook pipeline (HMAC signature verification, release/tag events, template git sync) across the Django API and Python core library.",
        "Contributed to Tirith, StackGuardian's open-source policy engine: built the Workflow and Infracost providers plus six core comparison evaluators.",
      ],
      start: "Nov 2021",
      end: "Jun 2023",
      companyWebsiteURL: "https://www.stackguardian.io/",
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
      companyWebsiteURL: "https://goglocal.live/",
    },
  ],
  Projects: [
    {
      title: "FormiVerse",
      description:
        "A one-stop solution for form creation, editing, and management! Effortlessly integrate forms into your websites, view responses in real-time, and download the data in multiple formats",
      liveLink: "https://formi-verse.vercel.app/",
      sourceCodeLink: "https://github.com/naveen8801/FormiVerse",
      technologies: [
        "TypeScript",
        "NextJS",
        "Shadcn UI",
        "Tailwind",
        "MongoDB",
      ],
    },

    {
      title: "DevTodo",
      description:
        "DevTodo is a tool that scans your GitHub repository for TODO comments in your code and lists them in an organized manner. With DevTodo, you can easily keep track of all the pending TODOs in your project, ensuring that nothing slips through the cracks.",
      liveLink: "https://dev-todo-naveen8801.vercel.app/",
      sourceCodeLink: "https://github.com/naveen8801/DevTodo",
      technologies: ["TypeScript", "NextJS", "Tailwind", "MongoDB"],
    },
  ],
  OpenSourceContributions: [
    {
      repoName: "stackguardian/tirith",
      commitsLink:
        "https://github.com/StackGuardian/tirith/commits/main/?author=naveen8801",
    },
    {
      repoName: "@stackguardian/backstage-plugin-sg-library",
      commitsLink:
        "https://www.npmjs.com/package/@stackguardian/backstage-plugin-sg-library",
    },
    {
      repoName: "facebook/lexical",
      commitsLink:
        "https://github.com/facebook/lexical/commits/main/?author=naveen8801",
    },
    {
      repoName: "razorpay/blade",
      commitsLink:
        "https://github.com/razorpay/blade/commits/master/?author=naveen8801",
    },
    {
      repoName: "anitab-org/bridge-in-tech-web",
      commitsLink:
        "https://github.com/anitab-org/bridge-in-tech-web/commits/develop/?author=naveen8801",
    },
    {
      repoName: "anitab-org/bridge-in-tech-backend",
      commitsLink:
        "https://github.com/anitab-org/bridge-in-tech-backend/commits/develop/?author=naveen8801",
    },
  ],
  Links: {
    github: "https://github.com/naveen8801",
    twitter: "https://twitter.com/naveen__8801",
    email: "naveensharma10d@gmail.com",
    resume:
      "https://drive.google.com/file/d/1KNASHGoujFCLUmVNifvDccvrE2ZOQNKU/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/naveen-6777881ab/",
  },
};
