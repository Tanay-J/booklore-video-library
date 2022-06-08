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

const Sidebar = () => {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "orange" : "",
    fontWeight: "400",
  });
  return (
    <aside className={`${styles.sidebar_container} mx-m my-xs`}>
      <ul className={`${styles.sidebar_list}`}>
        <li
          className={`${styles.list_items} text-dark p-xs pointer text-center`}
        >
          <NavLink to="/" className="link link-none text-dark ">
            <BsHouseFill />
            <small className="">Home</small>{" "}
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
            <BsCompassFill /> <small>Explore</small>
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
            <BsHeartFill /> <small>Watch Later</small>
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
            <BsFillFolderFill /> <small>Playlists</small>
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
            <BsHandThumbsUpFill /> <small>Likes</small>
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
            <BsClockFill /> <small>History</small>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export { Sidebar };
