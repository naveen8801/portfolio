import React from "react";
import { IData } from "./../types/index";

const Footer: React.FC<{ data: IData }> = (props): React.ReactElement => {
  return (
    <button className="w-full h-30 flex justify-center items-center px-16 py-8">
      Footer
    </button>
  );
};

export default Footer;
