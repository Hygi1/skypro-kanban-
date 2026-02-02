import { useState, useEffect, useRef } from "react";
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  UserButton,
  UserPopup,
  UserName,
  UserEmail,
  ThemeToggle,
  ThemeCheckbox,
  LogoutButton,
} from "./Header.styled";

function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    if (typeof window !== "undefined") {
      return document.body.classList.contains("dark-theme");
    }
    return false;
  });

  const popupRef = useRef(null);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsUserPopupOpen(false);
      }
    };

    if (isUserPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserPopupOpen]);

  const toggleUserPopup = () => {
    setIsUserPopupOpen(!isUserPopupOpen);
  };

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setIsUserPopupOpen(false);
    window.location.hash = "#popExit";
  };

  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo $show={!isDarkTheme}>
            <a href="" target="_self" rel="noreferrer">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>

          <HeaderLogo $show={isDarkTheme}>
            <a href="" target="_self" rel="noreferrer">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>

          <HeaderNav>
            <HeaderButton href="#popNewCard">Создать новую задачу</HeaderButton>
            <UserButton onClick={toggleUserPopup}>Ivan Ivanov</UserButton>

            {isUserPopupOpen && (
              <UserPopup ref={popupRef}>
                <UserName>Ivan Ivanov</UserName>
                <UserEmail>ivan.ivanov@gmail.com</UserEmail>
                <ThemeToggle>
                  <p>Темная тема</p>
                  <ThemeCheckbox
                    type="checkbox"
                    checked={isDarkTheme}
                    onChange={handleThemeToggle}
                  />
                </ThemeToggle>
                <LogoutButton onClick={handleLogoutClick}>
                  <a href="#popExit">Выйти</a>
                </LogoutButton>
              </UserPopup>
            )}
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
