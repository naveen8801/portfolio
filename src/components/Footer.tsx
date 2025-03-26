"use client";

import React, { useContext } from "react";
import { IData } from "./../types/index";
import SocialLinks from "./SocialLinks";
import { DataProviderContext } from "@/context";

const Footer: React.FC<{ data: IData }> = (props): React.ReactElement => {
  const links = useContext(DataProviderContext).Links;
  return (
    <button className="w-full h-36 box-border flex gap-8 justify-end items-center px-16">
      <div>
        <SocialLinks
          githubLink={links.github}
          twitterLink={links.twitter}
          linkedinLink={links.linkedin}
          gmailLink={links.email}
        />
      </div>
    </button>
  );
};

export default Footer;
