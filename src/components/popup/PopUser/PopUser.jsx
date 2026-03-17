import React from "react";
import {
  UserPopup,
  UserName,
  UserEmail,
  ThemeToggle,
  ThemeCheckbox,
  LogoutButton,
} from "./PopUser.styled";

const PopUser = ({ onThemeToggle, isDarkTheme, onLogout, user }) => {
  const displayName = user?.name || user?.login || "Пользователь";
  const displayLogin = user?.login || "";

  return (
    <UserPopup>
      <UserName>{displayName}</UserName>
      <UserEmail>{displayLogin}</UserEmail>
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
