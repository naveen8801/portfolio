"use Client";
import Link from "next/link";
import React, { ReactElement, useMemo } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

interface IProps {
  githubLink?: string;
  linkedinLink?: string;
  twitterLink?: string;
  gmailLink?: string;
}

const SocialLinks: React.FC<IProps> = (props): React.ReactElement => {
  const ele: ReactElement = useMemo(() => {
    const { githubLink, linkedinLink, twitterLink, gmailLink } = props;
    let listElement: ReactElement[] = [];
    let iconClass = "hover:cursor-pointer hover:scale-105";
    let iconSize = 30;
    if (githubLink) {
      listElement.push(
        <Link target="_blank" href={githubLink}>
          <FaGithub className={iconClass} size={iconSize} />
        </Link>
      );
    }
    if (linkedinLink) {
      listElement.push(
        <Link target="_blank" href={linkedinLink}>
          <FaLinkedin className={iconClass} size={iconSize} />
        </Link>
      );
    }
    if (twitterLink) {
      listElement.push(
        <Link target="_blank" href={twitterLink}>
          <FaTwitter className={iconClass} size={iconSize} />
        </Link>
      );
    }
    if (gmailLink) {
      listElement.push(
        <Link target="_blank" href={`mailto:${gmailLink}`}>
          <SiGmail className={iconClass} size={iconSize} />
        </Link>
      );
    }
    return (
      <div className="w-fit py-2 flex items-center justify-between gap-4">
        {listElement.map((el, idx) => (
          <div key={idx}>{el}</div>
        ))}
      </div>
    );
  }, [props]);

  return <div className="w-full flex items-center justify-center">{ele}</div>;
};

export default SocialLinks;
