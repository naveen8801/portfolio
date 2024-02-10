import Link from "next/link";
import React from "react";

interface IProp {
  children: string | React.JSX.Element | React.JSX.Element[];
  url?: string;
  variant?: string;
}

const Button: React.FC<IProp> = ({
  children,
  variant,
  url = "",
}): React.ReactElement => {
  if (variant === "inline") {
    return (
      <div className="h-10 min-w-28 font-extrabold text-lg flex items-center justify-center hover:cursor-pointer hover:scale-105">
        {children}
      </div>
    );
  } else if (variant === "normal") {
    return (
      <div className="h-10 min-w-28 font-extrabold text-lg flex items-center justify-center hover:cursor-pointer hover:scale-105">
        {children}
      </div>
    );
  } else if (variant === "link") {
    return (
      <Link href={url} target="_blank">
        <div className="h-10 min-w-28 font-extrabold text-lg flex items-center justify-center hover:cursor-pointer hover:scale-105">
          {children}
        </div>
      </Link>
    );
  } else {
    return <></>;
  }
};

export default Button;
