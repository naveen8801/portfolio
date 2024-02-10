import React from "react";
import { IData } from "./../types/index";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar: React.FC<{ data: IData }> = (props): React.ReactElement => {
  return (
    <div className="w-full h-30 flex justify-end px-16 py-8">
      <ThemeSwitcher />
    </div>
  );
};

export default NavBar;
