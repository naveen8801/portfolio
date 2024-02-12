"use client";
import React from "react";
import { IconType } from "react-icons";

interface IProp {
  Icon: IconType;
  text: string;
}

const Badge: React.FC<IProp> = (props): React.ReactElement => {
  const { text, Icon } = props;
  return (
    <div className="w-fit p-2 rounded-xl flex gap-1 items-center justify-center border-2">
      <Icon size={27} />
      <span className="text-l">{text}</span>
    </div>
  );
};

export default Badge;
