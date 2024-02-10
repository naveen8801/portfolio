import React from "react";
import { IData } from "./../types/index";

const Footer: React.FC<{ data: IData }> = (props): React.ReactElement => {
  return (
    <div className="w-full h-30 bg-red-700 flex justify-end px-16 py-8">
      Footer
    </div>
  );
};

export default Footer;
