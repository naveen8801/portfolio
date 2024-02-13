import React from "react";

const ProjectsSection: React.FC = (): React.ReactElement => {
  return (
    <div className="w-full box-border h-fit my-16 p-2 md:3 lg:4">
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <h1 className="w-full text-5xl text-center font-bold md:text-left lg:text-left">
          Projects
        </h1>
        <div className="w-full flex flex-wrap items-center justify-center md:items-start md:justify-start gap-2">
          Test
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
