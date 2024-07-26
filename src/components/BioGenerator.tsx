"use client";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

interface IProps {
  currentPosition: string;
  currentCompany: string;
  companyWebsiteURL: string;
}

const BioGenerator: React.FC<IProps> = (props): React.ReactElement => {
  const { currentPosition, currentCompany, companyWebsiteURL } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const bioElement = useMemo(() => {
    if (!mounted) {
      return <></>;
    }

    return (
      <div className="text-l italic font-bold-light md:text-xl">
        <span>&quot; </span>
        <span>{currentPosition}</span>
        <span className="text-blue-500 dark:text-blue-400  ml-1">
          <Link
            href={companyWebsiteURL || ""}
            target="_blank"
          >{`@${currentCompany}`}</Link>
        </span>
        <span> &quot;</span>
      </div>
    );
  }, [currentPosition, currentCompany, companyWebsiteURL, mounted]);

  return <div>{bioElement}</div>;
};

export default BioGenerator;
