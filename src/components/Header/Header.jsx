import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopUser from "../popup/PopUser/PopUser";
import PopNewCard from "../popup/PopNewCard/PopNewCard";
import Modal from "../Modal/Modal";
import ExitModal from "../ExitModal/ExitModal";
import { ThemeToggleContext } from "../../context/ThemeContext";
import { useAuth } from "../../context/use-auth.jsx";
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
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeToggleContext);
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) return null;

  const handleExitClick = () => {
    setIsExitModalOpen(true);
    setIsUserPopupOpen(false);
  };

  const handleLogoutConfirm = () => {
    logout();
    setIsExitModalOpen(false);
    navigate("/login");
  };

  const openNewCardModal = () => setIsNewCardModalOpen(true);
  const closeNewCardModal = () => setIsNewCardModalOpen(false);
  const closeExitModal = () => setIsExitModalOpen(false);

  const displayName = user?.name || user?.login || "Пользователь";

  return (
    <>
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
              <HeaderButton onClick={openNewCardModal} className="_hover01">
                Создать новую задачу
              </HeaderButton>
              <UserButton
                onClick={() => setIsUserPopupOpen(!isUserPopupOpen)}
                className="_hover02"
              >
                {displayName}
              </UserButton>
              {isUserPopupOpen && (
                <PopUser
                  onThemeToggle={toggleTheme}
                  isDarkTheme={isDarkTheme}
                  onLogout={handleExitClick}
                  user={user}
                />
              )}
            </HeaderNav>
          </HeaderBlock>
        </div>
      </HeaderWrapper>

      {isNewCardModalOpen && (
        <Modal onClose={closeNewCardModal}>
          <PopNewCard onClose={closeNewCardModal} />
        </Modal>
      )}

      {isExitModalOpen && (
        <Modal onClose={closeExitModal}>
          <ExitModal
            onConfirm={handleLogoutConfirm}
            onCancel={closeExitModal}
          />
        </Modal>
      )}
    </>
  );
}

export default Header;
