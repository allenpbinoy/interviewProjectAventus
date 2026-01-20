
import { lightTheme, darkTheme, type StyleConfig } from "../config/styleConfig";


export const useTheme = (theme: "light" | "dark" = "light"): StyleConfig => {
  return theme === "light" ? lightTheme : darkTheme;
};
