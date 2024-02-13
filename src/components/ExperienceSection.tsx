import { data as Data } from "./../lib/data";
import React from "react";
import ExperienceItem from "./ExperienceItem";

const ExperienceSection: React.FC = (): React.ReactElement => {
  const data = Data.Experience;
  return (
    <div className="w-full box-border h-fit my-16 p-2 md:3 lg:4">
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <h1 className="w-full text-5xl text-center font-bold md:text-left lg:text-left">
          Experience
        </h1>
        <div className="w-full">
          {data.map((item, idx) => (
            <ExperienceItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
