"use client";
import { DataProviderContext } from "@/context";
import React, { useContext } from "react";
import { FaLocationDot, FaCalendar } from "react-icons/fa6";

const EducationSection: React.FC = (): React.ReactElement => {
  const data = useContext(DataProviderContext).Education;
  return (
    <div className="w-full box-border h-fit my-16 p-2 md:p-3 lg:p-4">
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <h1 className="w-full text-5xl text-center font-bold md:text-left lg:text-left">
          Education
        </h1>
        <div className="w-full">
          {data.map((ed, idx) => (
            <div key={idx} className="text-center mb-4 md:text-left">
              <div className="text-l font-semibold mb-1">{ed.title}</div>
              <div className="text-m text-slate-600 dark:text-slate-400 mb-1">
                <span className="flex justify-center items-center gap-1 md:justify-start md:items-start">
                  <FaLocationDot size={20} />
                  {ed.college}
                </span>
              </div>
              <div className="text-m text-slate-600 dark:text-slate-400 mb-1">
                <span className="flex justify-center items-center gap-1 md:justify-start md:items-start">
                  <FaCalendar size={18} />
                  {`${ed.start} - ${ed.end}`}
                </span>
              </div>
              <div className="text-m text-slate-600 dark:text-slate-400">
                {ed.grade}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
