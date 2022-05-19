import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillPlayCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import styles from "./listing.module.css";
import {
  addToWatchLater,
  removeFromWatchLater,
} from "utils/service-requests/watchlater-services";
import {
  addToPlaylist,
  createPlaylist,
  removeFromPlaylist,
} from "utils/service-requests/playlist-services";
import { useData } from "contexts/data-context";
import { useAuth } from "contexts/auth-context";
import { addToHistory } from "utils/service-requests/history-services";
import { VideoLoader } from "components/loader";

const VideoCard = ({ video, isLoading }) => {
  const {
    dataState: { watchlater, playlists },
    dataDispatch,
  } = useData();
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  const isInPlaylist = (playlist) => {
    return playlist.videos.some(
      (playlistVideo) => playlistVideo._id === video._id
    );
  };

  const playlistOpsHandler = (e, playlistId) => {
    e.target.checked
      ? addToPlaylist(playlistId, video, dataDispatch)
      : removeFromPlaylist(playlistId, video._id, dataDispatch);
    setShowOptions(false);
  };

  const playlistCreator = (e) => {
    if (e.key === "Enter") {
      if (isAuthenticated) {
        createPlaylist(e.target.value, dataDispatch);
        e.target.value = "";
      } else navigate("/login");
    }
  };
  return (
    <div>
      {isLoading ? (
        <VideoLoader />
      ) : (
        <article className={`${styles.card_container} pos-rel mx-s`}>
          <div className={`${styles.thumbnail_container}  br-s pos-rel`}>
            <Link
              to={`/video/${video._id}`}
              state={{ currentVideo: video }}
              onClick={() =>
                isAuthenticated && addToHistory(video, dataDispatch)
              }
              className="link-none text-black"
            >
              <img
                className={`${styles.thumbnail} br-s`}
                src={video.thumbnail}
              />
              <BsFillPlayCircleFill
                size="35px"
                className={`${styles.play_btn}`}
              />
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
              onClick={() => setShowOptions(!showOptions)}
            />
            {showOptions && (
              <ul className={`${styles.options} br-s`}>
                {!watchlater.find((item) => item._id === video._id) ? (
                  <li
                    className="px-xs my-xs pointer"
                    onClick={() => {
                      isAuthenticated
                        ? addToWatchLater(video, dataDispatch)
                        : navigate("/login");
                    }}
                  >
                    <small> Watch Later </small>
                  </li>
                ) : (
                  <li
                    className="text-danger px-xs my-xs pointer"
                    onClick={() =>
                      removeFromWatchLater(video._id, dataDispatch)
                    }
                  >
                    <small> Remove from Watch Later</small>
                  </li>
                )}

                <li className=" px-xs my-xs pointer">
                  <small>Add to Playlist</small>
                  <ul>
                    {playlists.map((list) => (
                      <li>
                        <small>
                          <label htmlFor={list.title}>
                            <input
                              type="checkbox"
                              checked={isInPlaylist(list)}
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
                        className="input bg-transparent border-transparent text-white"
                        type="text"
                        placeholder="Create Playlist"
                        onKeyDown={playlistCreator}
                      />
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
        </article>
      )}
    </div>
  );
};
export { VideoCard };
