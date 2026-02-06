import { useState, useEffect } from "react";
import { ThemeToggleContext } from "./ThemeContext";

export const ThemeToggleProvider = ({
  children,
  toggleTheme: propToggleTheme,
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    if (propToggleTheme) {
      propToggleTheme();
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
  }, [isDarkTheme]);

  const contextValue = {
    isDarkTheme,
    toggleTheme,
    isLoggedIn,
    handleLogin,
    handleLogout,
  };

  return (
    <ThemeToggleContext.Provider value={contextValue}>
      {children}
    </ThemeToggleContext.Provider>
  );
};
