import { Link } from "react-router-dom";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useData } from "contexts/data-context";
import { deletePlaylist } from "utils/service-requests/playlist-services";
import styles from "./playlists.module.css";

const PlaylistCard = ({ playlist }) => {
  const { _id, title, description, videos } = playlist;
  const [showOptions, setShowOptions] = useState(false);
  const { dataDispatch } = useData();

  return (
    <section className={`${styles.card_container} pos-rel mx-s`}>
      <div className={`${styles.thumbnail_container}  br-s pos-rel`}>
        <Link to={`/playlists/${_id}`} className="link-none text-black">
          <img
            className={`${styles.thumbnail} br-s`}
            src={videos[0]?.thumbnail}
          />
        </Link>
      </div>

      <div className={`${styles.video_details} mx-s`}>
        <p className="text-dark font-bold">{title}</p>
        <small className="text-gray">{description}</small>
      </div>
      <div>
        <BsThreeDotsVertical
          className={`${styles.options_btn} pointer text-dark`}
          onClick={() => setShowOptions(!showOptions)}
        />
        {showOptions && (
          <small
            className={`${styles.options} pointer px-xs mx-xs br-s`}
            onClick={() => deletePlaylist(_id, dataDispatch)}
          >
            Delete Playlist
          </small>
        )}
      </div>
    </section>
  );
};
export { PlaylistCard };
