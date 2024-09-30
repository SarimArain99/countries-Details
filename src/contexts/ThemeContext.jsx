import { createContext, useEffect, useState } from "react";
export const themeContext = createContext("sarim");

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("isDarkMode")) || false;
  });
  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);
  return (
    <themeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      {children}{" "}
    </themeContext.Provider>
  );
}
