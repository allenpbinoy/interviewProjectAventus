export type Theme = "light" | "dark";

export interface StyleConfig {

  
  colors: {
    background: string;
    cardBackground: string;
    text: string;
    primary: string;
    accent: string;
    navbar: string;
    navbarText: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  borderRadius: string;
  boxShadow: string;
}

export const lightTheme: StyleConfig = {
  colors: {
    background: "#f5f5f5",
    cardBackground: "#ffffff",
    text: "#333333",
    primary: "#0077cc",
    accent: "#ffcc00",
    navbar: "#0077cc",
    navbarText: "#ffffff",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "32px",
  },
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

export const darkTheme: StyleConfig = {
  colors: {
    background: "#1a1a1a",
    cardBackground: "#2a2a2a",
    text: "#f5f5f5",
    primary: "#3399ff",
    accent: "#ffcc00",
    navbar: "#222222",
    navbarText: "#f5f5f5",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "32px",
  },
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
};
