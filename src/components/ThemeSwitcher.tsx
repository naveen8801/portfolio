"use client";
import React from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher: React.FC = (): React.ReactElement => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <p onClick={() => setTheme("light")}>Enable light</p>;
    } else {
      return <p onClick={() => setTheme("dark")}>Enable Dark</p>;
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
