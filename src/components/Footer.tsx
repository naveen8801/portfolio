import React from "react";
import { IData } from "./../types/index";

const Footer: React.FC<{ data: IData }> = (props): React.ReactElement => {
  console.log({ props });
  return <div>Footer</div>;
};

export default Footer;
