import { Link } from "react-router-dom";
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
  return (
    <aside className={`${styles.sidebar_container} mx-m my-xs`}>
      <ul className={`${styles.sidebar_list}`}>
        <Link to="/" className="link link-none text-dark ">
          <li
            className={`${styles.list_items} text-dark p-xs pointer text-center`}
          >
            <BsHouseFill />
            <small className="">Home</small>
          </li>
        </Link>
        <Link to="/explore" className="link link-none text-dark">
          <li
            className={`${styles.list_items} text-dark p-xs pointer text-center`}
          >
            <BsCompassFill /> <small>Explore</small>
          </li>
        </Link>

        <Link to="/" className="link link-none text-dark">
          <li
            className={`${styles.list_items} text-dark p-xs pointer text-center`}
          >
            <BsHeartFill /> <small>Watch Later</small>
          </li>
        </Link>
        <Link to="/" className="link link-none text-dark">
          <li
            className={`${styles.list_items} text-dark p-xs pointer text-center`}
          >
            <BsFillFolderFill /> <small>Playlists</small>
          </li>
        </Link>
        <Link to="/" className="link link-none text-dark">
          <li
            className={`${styles.list_items} text-dark p-xs pointer text-center`}
          >
            <BsHandThumbsUpFill /> <small>Likes</small>
          </li>
        </Link>
        <Link to="/" className="link link-none text-dark">
          <li
            className={`${styles.list_items} text-dark p-xs pointer text-center`}
          >
            <BsClockFill /> <small>History</small>
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export { Sidebar };
