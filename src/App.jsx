import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeToggleProvider } from "./context/ThemeToggleProvider";
import AppRoutes from "./AppRoutes";
import "./App.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    if (newTheme) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeToggleProvider toggleTheme={toggleTheme}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <div className="wrapper">
            <AppRoutes />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeToggleProvider>
  );
}

export default App;
