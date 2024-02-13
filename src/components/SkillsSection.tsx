"use client";
import { data as Data } from "./../lib/data";
import React from "react";
import Badge from "./Badge";
import { FaPlusCircle } from "react-icons/fa";
import { IconType } from "react-icons";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoPython,
  BiLogoCPlusPlus,
  BiLogoNodejs,
  BiLogoDjango,
  BiLogoFlask,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs, TbBrandSocketIo } from "react-icons/tb";

const SkillsSection: React.FC = (): React.ReactElement => {
  const data = Data.Skills;

  const iconFromSkills = (skill: string): IconType => {
    switch (skill) {
      case "ReactJS":
        return BiLogoReact;
      case "JavaScript":
        return BiLogoJavascript;
      case "TypeScript":
        return BiLogoTypescript;
      case "Python":
        return BiLogoPython;
      case "C++":
        return BiLogoCPlusPlus;
      case "NodeJS":
        return BiLogoNodejs;
      case "Django":
        return BiLogoDjango;
      case "Python Flask":
        return BiLogoFlask;
      case "NextJS":
        return TbBrandNextjs;
      case "ExpressJS":
        return SiExpress;
      case "Socket.io":
        return TbBrandSocketIo;
      default:
        return FaPlusCircle;
    }
  };

  return (
    <div className="w-full box-border h-fit my-16 p-2 md:p-3 lg:p-4">
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <h1 className="w-full text-5xl text-center font-bold md:text-left lg:text-left">
          Skills
        </h1>
        <div className="w-full flex flex-wrap items-center justify-center md:items-start md:justify-start gap-2">
          {data.map((skill, idx) => (
            <Badge key={idx} text={skill} Icon={iconFromSkills(skill)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
