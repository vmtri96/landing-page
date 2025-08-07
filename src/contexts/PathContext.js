"use client";
import { createContext, useContext, useState } from "react";

const PathContext = createContext();

export const usePathContext = () => {
  const context = useContext(PathContext);
  if (!context) {
    throw new Error("usePathContext must be used within a PathProvider");
  }
  return context;
};

export const PathProvider = ({ children }) => {
  const [pathActive, setPathActive] = useState("#hero");

  const value = {
    pathActive,
    setPathActive,
  };

  return <PathContext.Provider value={value}>{children}</PathContext.Provider>;
};
