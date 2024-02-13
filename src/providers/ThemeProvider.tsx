"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

interface IProp {
  children: string | React.JSX.Element | React.JSX.Element[];
}

const ThemeProviderComponent: React.FC<IProp> = (props): React.ReactElement => {
  const children = props.children;
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderComponent;
