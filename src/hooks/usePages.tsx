import { useConfig } from "../context/ConfigContext";

export const usePages = () => {
  const { config } = useConfig();
  return config.pages
};
