import { BsMoonFill, BsPlayCircleFill, BsSun } from "react-icons/bs";
import { useEffect } from "react";
import styles from "./navigation.module.css";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";

const Navbar = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return (
    <header className={`${styles.nav_header} nav-bg-dark px-xl py-s`}>
      <div className={`${styles.logo}`}>
        <BsPlayCircleFill className={`${styles.logo_icon}`} />
        <Link to="/" className="text-dark link link-none">
          <h2>
            BOOK<span className={`${styles.text_thin}`}>LORE</span>
          </h2>
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li className="mx-s">
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          </li>
          <li className="mx-s">
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
    </header>
  );
};

export { Navbar };
