"use client";

import { DataProviderContext } from "@/context";
import { data } from "../lib/data";
import React from "react";

interface IProp {
  children: React.ReactNode;
}

const DataProvider: React.FC<IProp> = ({ children }): React.ReactElement => {
  return (
    <DataProviderContext.Provider value={data}>
      {children}
    </DataProviderContext.Provider>
  );
};

export default DataProvider;
