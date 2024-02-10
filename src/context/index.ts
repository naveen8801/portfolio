"use client";

import { data } from "@/lib/data";
import { IData } from "@/types";
import { createContext } from "react";

export const DataProviderContext = createContext<IData>(data);
