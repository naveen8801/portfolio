import React from "react";
import { IData } from "./../types/index";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar: React.FC<{ data: IData }> = (props): React.ReactElement => {
  return (
    <div>
      <ThemeSwitcher />
    </div>
  );
};

export default NavBar;
