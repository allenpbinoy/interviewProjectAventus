import { createContext, useContext, type ReactNode } from "react";
import { appConfig } from "../config/appConfig";

interface ConfigContextType {
  config: typeof appConfig;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider = ({ children }: { children: ReactNode }) => (
  <ConfigContext.Provider value={{ config: appConfig }}>
    {children}
  </ConfigContext.Provider>
);

// eslint-disable-next-line react-refresh/only-export-components
export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) throw new Error("useConfig must be used within ConfigProvider");
  return context;
};
