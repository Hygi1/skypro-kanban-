import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

  const toggleUserPopup = () => {
    setIsUserPopupOpen(!isUserPopupOpen);
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
              <div className="pop-user-set">
                <div className="pop-user-set__content">
                  <p className="pop-user-set__name">Ivan Ivanov</p>
                  <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                  <div className="pop-user-set__theme">
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="checkbox"
                    />
                  </div>
                  <button type="button" className="_hover03">
                    <a href="#popExit">Выйти</a>
                  </button>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
