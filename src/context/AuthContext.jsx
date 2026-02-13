import { useState, useEffect, useCallback } from "react";
import { AuthContext } from "./auth-context.jsx";
import { authAPI } from "../services/auth";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const data = await authAPI.getCurrentUser();
      const currentUser = Array.isArray(data.users)
        ? data.users.find((u) => u.token === token)
        : data.user;
      if (currentUser) {
        setUser(currentUser);
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem("token");
      }
    } catch {
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = async (login, password) => {
    try {
      setLoading(true);
      const data = await authAPI.login(login, password);
      localStorage.setItem("token", data.user.token);
      setUser(data.user);
      setIsLoggedIn(true);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error:
          error.message === "UNAUTHORIZED"
            ? "Неверный логин или пароль"
            : "Ошибка сети",
      };
    } finally {
      setLoading(false);
    }
  };

  const register = async (login, name, password) => {
    try {
      setLoading(true);
      const data = await authAPI.register(login, name, password);
      localStorage.setItem("token", data.user.token);
      setUser(data.user);
      setIsLoggedIn(true);
      return { success: true };
    } catch (error) {
      let errorMessage = "Ошибка регистрации";
      if (error.message.includes("400")) {
        errorMessage = "Пользователь с таким логином уже существует";
      }
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
  };

  const value = {
    isLoggedIn,
    user,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
