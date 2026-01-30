import { useState, useEffect, useRef } from "react";

function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        if (!event.target.closest(".header__user")) {
          setIsUserPopupOpen(false);
        }
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
    const newThemeState = !isDarkTheme;
    setIsDarkTheme(newThemeState);

    if (newThemeState) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setIsUserPopupOpen(false);
    window.location.hash = "#popExit";
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self" rel="noreferrer">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self" rel="noreferrer">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <a href="#popNewCard" className="header__btn-main-new _hover01">
              Создать новую задачу
            </a>
            <button className="header__user _hover02" onClick={toggleUserPopup}>
              Ivan Ivanov
            </button>

            {isUserPopupOpen && (
              <div className="header__pop-user-set" ref={popupRef}>
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                    checked={isDarkTheme}
                    onChange={handleThemeToggle}
                  />
                </div>
                <button
                  type="button"
                  className="_hover03"
                  onClick={handleLogoutClick}
                >
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
