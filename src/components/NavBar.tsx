import React from "react";
import { IData } from "./../types/index";
import ThemeSwitcher from "./ThemeSwitcher";
import Button from "./Button";

const NavBar: React.FC<{ data: IData }> = (props): React.ReactElement => {
  return (
    <div className="w-full h-30 flex gap-12 justify-end items-center px-16 py-8">
      <Button variant="link">Resume</Button>
      <ThemeSwitcher />
    </div>
  );
};

export default NavBar;
