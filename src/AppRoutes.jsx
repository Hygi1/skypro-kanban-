import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeToggleContext } from "./context/ThemeContext";

import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCardPage from "./pages/AddCardPage/AddCardPage"; // Без фигурных скобок!
import CardPage from "./pages/CardPage/CardPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const AppRoutes = () => {
  const { isLoggedIn } = useContext(ThemeToggleContext);

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <MainPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/add"
        element={isLoggedIn ? <AddCardPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/card/:id"
        element={isLoggedIn ? <CardPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/exit"
        element={isLoggedIn ? <ExitPage /> : <Navigate to="/login" />}
      />

      <Route
        path="/login"
        element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />}
      />
      <Route
        path="/register"
        element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/" />}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
