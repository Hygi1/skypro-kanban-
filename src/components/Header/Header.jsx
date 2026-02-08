import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PopUser from "../popup/PopUser/PopUser";
import { ThemeToggleContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  UserButton,
} from "./Header.styled";

function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeToggleContext);
  const { isLoggedIn, handleLogout } = useContext(AuthContext);

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
              <PopUser
                onClose={() => setIsUserPopupOpen(false)}
                onThemeToggle={toggleTheme}
                isDarkTheme={isDarkTheme}
                onLogout={handleLogout}
              />
            )}
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
