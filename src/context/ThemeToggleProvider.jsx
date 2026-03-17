import { useState, useEffect } from "react";
import { ThemeToggleContext } from "./ThemeContext";

export const ThemeToggleProvider = ({
  children,
  toggleTheme: propToggleTheme,
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    if (propToggleTheme) {
      propToggleTheme();
    }
  };

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
  }, [isDarkTheme]);

  const contextValue = {
    isDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeToggleContext.Provider value={contextValue}>
      {children}
    </ThemeToggleContext.Provider>
  );
};
