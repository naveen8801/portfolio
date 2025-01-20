import React from "react";
import { data as Data } from "./../lib/data";
import Link from "next/link";

const OpenSourceSection = () => {
  const data = Data.OpenSourceContributions;
  return (
    <div className="w-full box-border h-fit my-16 p-2 md:3 lg:4">
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <h1 className="w-full text-5xl text-center font-bold md:text-left lg:text-left">
          Open Source Contributions
        </h1>
        <div className="w-full">
          <ul className="list-disc pl-5 text-m text-slate-600 dark:text-slate-400">
            {data.map((item, idx) => (
              <li key={idx}>
                <Link
                  className="text-blue-500 dark:text-blue-400 "
                  href={item?.commitsLink}
                  target="_blank"
                >
                  {item?.repoName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceSection;
