import React from "react";
import { IData } from "./../types/index";
import ThemeSwitcher from "./ThemeSwitcher";
import Button from "./Button";

const NavBar: React.FC<{ data: IData }> = (props): React.ReactElement => {
  const resumeLink = props.data.Links.resume;
  return (
    <div className="w-full h-30 flex gap-8 justify-end items-center px-16 py-8">
      <Button variant="link" url={resumeLink}>
        Resume
      </Button>
      <ThemeSwitcher />
    </div>
  );
};

export default NavBar;
