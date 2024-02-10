import Footer from "./../components/Footer";
import NavBar from "./../components/NavBar";
import { data } from "@/lib/data";
import React, { ReactNode } from "react";

const LayoutProvider: React.FC<{
  children: ReactNode;
}> = ({ children }): React.ReactElement => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar data={data} />
      <div className="h-full overflow-aut">{children}</div>
      <Footer data={data} />
    </div>
  );
};

export default LayoutProvider;
