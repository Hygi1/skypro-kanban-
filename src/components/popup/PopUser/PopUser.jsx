import React from "react";
import { useNavigate } from "react-router-dom";
import {
  UserPopup,
  UserName,
  UserEmail,
  ThemeToggle,
  ThemeCheckbox,
  LogoutButton,
} from "./PopUser.styled";

const PopUser = ({ onClose, onThemeToggle, isDarkTheme }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    if (onClose) {
      onClose();
    }

    navigate("/login");
  };

  return (
    <UserPopup>
      <UserName>Ivan Ivanov</UserName>
      <UserEmail>ivan.ivanov@gmail.com</UserEmail>
      <ThemeToggle>
        <p>Темная тема</p>
        <ThemeCheckbox
          type="checkbox"
          checked={isDarkTheme}
          onChange={onThemeToggle}
        />
      </ThemeToggle>
      <LogoutButton onClick={handleLogout}>Выйти</LogoutButton>
    </UserPopup>
  );
};

export default PopUser;
