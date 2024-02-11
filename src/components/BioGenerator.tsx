"use client";
import Link from "next/link";
import React, { useMemo } from "react";

interface IProps {
  currentPosition: string;
  currentCompany: string;
  companyWebsiteURL: string;
}

const BioGenerator: React.FC<IProps> = (props): React.ReactElement => {
  const { currentPosition, currentCompany, companyWebsiteURL } = props;
  const bioElement = useMemo(() => {
    return (
      <div className="text-l italic font-bold-light">
        <span>" </span>
        <span>{currentPosition}</span>
        <span className="text-blue-500 dark:text-blue-400  ml-1">
          <Link
            href={companyWebsiteURL}
            target="_blank"
          >{`@${currentCompany}`}</Link>
        </span>
        <span> "</span>
      </div>
    );
  }, [currentPosition, currentCompany, companyWebsiteURL]);

  return <div>{bioElement}</div>;
};

export default BioGenerator;
