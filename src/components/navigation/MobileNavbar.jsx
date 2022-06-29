import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsList, BsMoonFill, BsPlayCircleFill, BsSun } from "react-icons/bs";
import { useLocalStorage } from "utils/hooks/useLocalStorage";
import styles from "./navigation.module.css";
import { useAuth } from "contexts/auth-context";
import { useData } from "contexts/data-context";

const MobileNavbar = () => {
  const {
    authState: { isAuthenticated },
    setAuthState,
  } = useAuth();
  const { dataDispatch } = useData();
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setAuthState({ isAuthenticated: false, userData: "", token: "" });
    dataDispatch({ type: "CLEAR_ALL" });
  };
  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return (
    <header
      className={`${styles.mob_nav_header} card-shadow nav-bg-dark px-xl py-s`}
    >
      <div className={`${styles.logo}`}>
        <BsPlayCircleFill className={`${styles.logo_icon}`} />
        <Link to="/" className="text-dark link link-none">
          <h2>
            BOOK<span className={`${styles.text_thin}`}>LORE</span>
          </h2>
        </Link>
      </div>
      <BsList
        onClick={() => setShowMenu((prev) => !prev)}
        className={`${styles.menu_btn}`}
      />
      {showMenu && (
        <nav className={``}>
          <ul className={`nav-links card-shadow br-s ${styles.mob_nav_menu}`}>
            <li className="mx-s">
              {!isAuthenticated ? (
                <Link to="/login">
                  <button className="btn btn-primary">Login</button>
                </Link>
              ) : (
                <button className="btn btn-primary" onClick={logoutHandler}>
                  Logout
                </button>
              )}
            </li>
            {!isAuthenticated && (
              <li className="mx-s">
                <Link to="/signup">
                  <button className="btn btn-outline outline-primary">
                    Sign Up
                  </button>
                </Link>
              </li>
            )}
            <li className="mx-s pointer">
              {!darkMode ? (
                <BsMoonFill
                  className={`${styles.icon}`}
                  size={20}
                  onClick={() => setDarkMode(true)}
                />
              ) : (
                <BsSun
                  className={`${styles.icon}`}
                  size={20}
                  onClick={() => setDarkMode(false)}
                />
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export { MobileNavbar };
