import { useState, useEffect } from "react";
import { AuthContext } from "./auth-context.jsx";
import { authAPI } from "../services/auth";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const login = async (login, password) => {
    try {
      setLoading(true);
      const data = await authAPI.login(login, password);
      const { password: _, ...safeUser } = data.user;
      localStorage.setItem("token", data.user.token);
      localStorage.setItem("user", JSON.stringify(safeUser));
      setUser(safeUser);
      setIsLoggedIn(true);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message || "Ошибка сети",
      };
    } finally {
      setLoading(false);
    }
  };

  const register = async (login, name, password) => {
    try {
      setLoading(true);
      const data = await authAPI.register(login, name, password);
      const { password: _, ...safeUser } = data.user;
      localStorage.setItem("token", data.user.token);
      localStorage.setItem("user", JSON.stringify(safeUser));
      setUser(safeUser);
      setIsLoggedIn(true);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message || "Ошибка регистрации",
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
