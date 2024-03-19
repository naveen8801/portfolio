import Link from "next/link";
import React from "react";
import { FaGithub, FaTools, FaLink } from "react-icons/fa";

interface IProps {
  title: string;
  description: string;
  sourceCodeLink?: string;
  technologies: string[];
  liveLink?: string;
}

const ProjectItem: React.FC<IProps> = (props): React.ReactElement => {
  const { title, description, sourceCodeLink, technologies, liveLink } = props;

  return (
    <div className="w-full my-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      {sourceCodeLink && (
        <h2 className="flex flex-row justify-start gap-1 items-center">
          <FaGithub className="text-slate-600 dark:text-slate-400" />
          <Link
            className="text-blue-500 dark:text-blue-400 "
            href={sourceCodeLink}
            target="_blank"
          >
            {sourceCodeLink?.split("/")[3] +
              "/" +
              sourceCodeLink?.split("/")[4]}
          </Link>
        </h2>
      )}
      {liveLink && (
        <h2 className="flex flex-row justify-start gap-1 items-center">
          <FaLink className="text-slate-600 dark:text-slate-400" />
          <Link
            className="text-blue-500 dark:text-blue-400 "
            href={liveLink}
            target="_blank"
          >
            {liveLink}
          </Link>
        </h2>
      )}

      <div className="flex flex-row justify-start items-center gap-1 text-m text-slate-600 dark:text-slate-400">
        <FaTools />
        <span className="text-justify">{technologies?.join(", ")}</span>
      </div>
      <ul className="list-disc text-m text-slate-600 dark:text-slate-400">
        <li className="text-justify">{description}</li>
      </ul>
    </div>
  );
};

export default ProjectItem;
