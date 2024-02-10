import Footer from "./../components/Footer";
import NavBar from "./../components/NavBar";
import { data } from "@/lib/data";
import React, { ReactNode } from "react";

const LayoutProvider: React.FC<{
  children: ReactNode;
}> = ({ children }): React.ReactElement => {
  return (
    <div className="h-screen flex flex-col box-border">
      <NavBar data={data} />
      <div className="h-full overflow-auto box-border">{children}</div>
      <Footer data={data} />
    </div>
  );
};

export default LayoutProvider;
