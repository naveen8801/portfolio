import React from "react";
import { IData } from "./../types/index";

const Footer: React.FC<{ data: IData }> = (props): React.ReactElement => {
  return (
    <button className="w-full h-36 box-border flex gap-8 justify-center items-center px-16">
      Footer
    </button>
  );
};

export default Footer;
