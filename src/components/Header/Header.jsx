import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeToggleContext } from "../../context/ThemeContext";
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  UserButton,
  PopupUserSet,
  PopupUserName,
  PopupUserEmail,
  PopupThemeToggle,
  PopupThemeCheckbox,
  PopupLogoutButton,
} from "./Header.styled";

function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const { isDarkTheme, toggleTheme, isLoggedIn } =
    useContext(ThemeToggleContext);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo $show={!isDarkTheme}>
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </HeaderLogo>

          <HeaderLogo $show={isDarkTheme}>
            <Link to="/">
              <img src="/images/logo_dark.png" alt="logo" />
            </Link>
          </HeaderLogo>

          <HeaderNav>
            <HeaderButton as={Link} to="/add" className="_hover01">
              Создать новую задачу
            </HeaderButton>

            <UserButton
              onClick={() => setIsUserPopupOpen(!isUserPopupOpen)}
              className="_hover02"
            >
              Ivan Ivanov
            </UserButton>

            {isUserPopupOpen && (
              <PopupUserSet>
                <PopupUserName>Ivan Ivanov</PopupUserName>
                <PopupUserEmail>ivan.ivanov@gmail.com</PopupUserEmail>
                <PopupThemeToggle>
                  <p>Темная тема</p>
                  <PopupThemeCheckbox
                    type="checkbox"
                    checked={isDarkTheme}
                    onChange={toggleTheme}
                  />
                </PopupThemeToggle>
                <PopupLogoutButton
                  as={Link}
                  to="/exit"
                  onClick={() => setIsUserPopupOpen(false)}
                >
                  Выйти
                </PopupLogoutButton>
              </PopupUserSet>
            )}
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
