"use client";
import { DataProviderContext } from "@/context";
import Image from "next/image";
import React, { useContext } from "react";
import BioGenerator from "./BioGenerator";

const IntroductionSection: React.FC = (): React.ReactElement => {
  const data = useContext(DataProviderContext).Introduction;
  const {
    name,
    profileImage,
    about,
    currentPosition,
    currentCompany,
    companyWebsiteURL,
  } = data;

  return (
    <div className="w-full box-border h-fit my-12 p-2 md:3 lg:4">
      <div className="w-full h-full flex flex-col gap-4 md:flex-row lg:flex-row">
        <div className="w-full flex items-center justify-center md:w-1/2 lg:w-1/3">
          <div className="w-64 md:w-full h-auto ">
            <Image
              className="rounded-full"
              alt="profile-img"
              src={profileImage}
              quality={100}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 text-center justify-center md:w-1/2 lg:w-2/3">
          <h1 className="text-5xl font-bold">{name}</h1>
          <BioGenerator
            companyWebsiteURL={companyWebsiteURL}
            currentCompany={currentCompany}
            currentPosition={currentPosition}
          />
          <p className="text-m text-slate-500 text-justify">{about}</p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;