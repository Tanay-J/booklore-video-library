import { Link } from "react-router-dom";
import { useState } from "react";
import { BsPlayCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import styles from "./history.module.css";
import { useData } from "contexts/data-context";
import {
  addToPlaylist,
  createPlaylist,
  removeFromPlaylist,
} from "utils/service-requests/playlist-services";
import { removeFromHistory } from "utils/service-requests/history-services";

const HistoryVideoCard = ({ video }) => {
  const [showOptions, setShowOptions] = useState(false);
  const {
    dataState: { playlists },
    dataDispatch,
  } = useData();

  const playlistOpsHandler = (e, playlistId) => {
    e.target.checked
      ? addToPlaylist(playlistId, video, dataDispatch)
      : removeFromPlaylist(playlistId, video._id, dataDispatch);
  };
  return (
    <div className={`${styles.card_container} pos-rel mx-s`}>
      <div className={`${styles.thumbnail_container}  br-s pos-rel`}>
        <Link to={`/video/${video._id}`} className="link-none text-black">
          <img className={`${styles.thumbnail} br-s`} src={video.thumbnail} />
          <BsPlayCircleFill size="35px" className={`${styles.play_btn}`} />
        </Link>
      </div>

      <img
        className={`${styles.avatar} avatar-circle avatar-s mx-xs`}
        src={video.creatorAvatar}
      />

      <div className={`${styles.video_details} mx-s`}>
        <p className="text-dark font-bold">{video.title}</p>
        <small className="text-gray">{video.creator}</small>
        <p className="text-gray text-xxs">{video.views} views</p>
      </div>

      <div>
        <BsThreeDotsVertical
          className={`${styles.options_btn} pointer text-dark`}
          onClick={() => setShowOptions((prevState) => !prevState)}
        />
        {showOptions && (
          <ul className={`${styles.options} br-s`}>
            <li
              className="text-danger px-xs my-xs pointer"
              onClick={() => removeFromHistory(video._id, dataDispatch)}
            >
              <small>Remove from History</small>
            </li>
            <li className=" px-xs my-xs pointer">
              <small>Add to Playlist</small>
              <ul>
                {playlists.map((list) => (
                  <li>
                    <small>
                      <label htmlFor={list.title}>
                        <input
                          type="checkbox"
                          id={list.title}
                          value={list.title}
                          onChange={(e) => playlistOpsHandler(e, list._id)}
                        />
                        {list.title}
                      </label>
                    </small>
                  </li>
                ))}
                <li className="my-xs">
                  <input
                    className="input bg-transparent border-transparent text-dark"
                    type="text"
                    placeholder="Create Playlist"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        createPlaylist(e.target.value, dataDispatch);
                        e.target.value = "";
                      }
                    }}
                  />
                </li>
              </ul>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
export { HistoryVideoCard };
