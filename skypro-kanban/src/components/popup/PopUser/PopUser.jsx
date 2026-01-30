import React, { useState, useEffect, useRef } from "react";
import "./PopUser.css";

const PopUser = ({ onClose }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        if (!event.target.closest(".header__user")) {
          onClose();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleThemeToggle = () => {
    const newThemeState = !isDarkTheme;
    setIsDarkTheme(newThemeState);

    if (newThemeState) {
      document.body.classList.add("dark-theme");
      document.querySelectorAll(".header__logo._dark").forEach((el) => {
        el.classList.add("_show");
      });
      document.querySelectorAll(".header__logo._light").forEach((el) => {
        el.classList.remove("_show");
      });
    } else {
      document.body.classList.remove("dark-theme");
      document.querySelectorAll(".header__logo._light").forEach((el) => {
        el.classList.add("_show");
      });
      document.querySelectorAll(".header__logo._dark").forEach((el) => {
        el.classList.remove("_show");
      });
    }
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    onClose();
    window.location.hash = "#popExit";
  };

  return (
    <div className="pop-user-set" ref={popupRef}>
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
      <button type="button" className="_hover03" onClick={handleLogoutClick}>
        <a href="#popExit">Выйти</a>
      </button>
    </div>
  );
};

export default PopUser;
