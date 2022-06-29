import { NavLink } from "react-router-dom";
import {
  BsClockFill,
  BsCompassFill,
  BsFillFolderFill,
  BsHandThumbsUpFill,
  BsHeartFill,
  BsHouseFill,
} from "react-icons/bs";
import styles from "./navigation.module.css";

const MobileSidebar = () => {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "orange" : "",
    fontWeight: "400",
  });
  return (
    <aside className={`${styles.mob_sidebar_container} mx-m my-xs`}>
      <ul className={`${styles.sidebar_list} text-s`}>
        <li
          className={`${styles.list_items} text-dark p-xs pointer text-center`}
        >
          <NavLink to="/" className="link link-none text-dark ">
            <BsHouseFill title="Home" />
          </NavLink>
        </li>

        <li
          className={`${styles.list_items} text-dark p-xs pointer text-center`}
        >
          <NavLink
            to="/explore"
            style={activeStyle}
            className="link link-none text-dark"
          >
            <BsCompassFill title="Explore" />
          </NavLink>
        </li>

        <li
          className={`${styles.list_items} text-dark p-xs pointer text-center`}
        >
          <NavLink
            to="/watchlater"
            style={activeStyle}
            className="link link-none text-dark"
          >
            <BsHeartFill title="Watch Later" />
          </NavLink>
        </li>

        <li
          className={`${styles.list_items} text-dark p-xs pointer text-center`}
        >
          <NavLink
            to="/playlists"
            style={activeStyle}
            className="link link-none text-dark"
          >
            <BsFillFolderFill title="Playlists" />
          </NavLink>
        </li>

        <li
          className={`${styles.list_items} text-dark p-xs pointer text-center`}
        >
          <NavLink
            to="/likes"
            style={activeStyle}
            className="link link-none text-dark"
          >
            <BsHandThumbsUpFill title="Likes" />
          </NavLink>
        </li>

        <li
          className={`${styles.list_items} text-dark p-xs pointer text-center`}
        >
          <NavLink
            to="/history"
            style={activeStyle}
            className="link link-none text-dark"
          >
            <BsClockFill title="History" />
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export { MobileSidebar };
