import React, { createContext, useContext, useState, type ReactNode } from "react";
import { darkTheme, lightTheme, type StyleConfig, type Theme } from "../config/styleConfig";


interface ConfigContextType {
  config: StyleConfig;
  toggleTheme: () => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const config: StyleConfig = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ConfigContext.Provider value={{ config, toggleTheme }}>
      {children}
    </ConfigContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) throw new Error("useConfig must be used within a ConfigProvider");
  return context;
};
