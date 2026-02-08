import React from "react";
import {
  UserPopup,
  UserName,
  UserEmail,
  ThemeToggle,
  ThemeCheckbox,
  LogoutButton,
} from "./PopUser.styled";

const PopUser = ({ onThemeToggle, isDarkTheme, onLogout }) => {
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
      <LogoutButton onClick={onLogout}>Выйти</LogoutButton>
    </UserPopup>
  );
};

export default PopUser;
