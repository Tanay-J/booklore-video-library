import { useReducer } from "react";
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
import { toast } from "react-toastify";

const VideoCard = ({ video, isLoading }) => {
  const {
    dataState: { watchlater, playlists },
    dataDispatch,
  } = useData();
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const navigate = useNavigate();

  const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_MENU":
        return { ...state, showMenu: !state.showMenu };
      case "TOGGLE_PLAYLIST_OPTIONS":
        return { ...state, playlistOptions: !state.playlistOptions };
      case "SET_INPUT":
        return { ...state, input: action.payload };
      default:
        break;
    }
  };
  const [menuState, menuDispatch] = useReducer(reducer, {
    showMenu: false,
    playlistOptions: false,
    input: "",
  });

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

  const playlistCreator = () => {
    if (isAuthenticated) {
      if (menuState.input) {
        createPlaylist(menuState.input, dataDispatch);
        menuDispatch({ type: "SET_INPUT", payload: "" });
      } else toast.error("Playlist name can't be empty");
    } else navigate("/login");
  };

  const formatDate = () => {
    const videoDate = new Date(Date.parse(video.createdOn));
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = videoDate.getDate();
    const month = months[videoDate.getMonth()];
    const year = videoDate.getFullYear();

    return `${date} ${month} ${year}`;
  };
  return (
    <div>
      {isLoading ? (
        <VideoLoader />
      ) : (
        <article className={`${styles.card_container} pos-rel mx-s my-xs`}>
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
            <Link
              to={`/video/${video._id}`}
              state={{ currentVideo: video }}
              onClick={() =>
                isAuthenticated && addToHistory(video, dataDispatch)
              }
              className="link-none text-black"
            >
              <p className="text-dark font-bold">{video.title}</p>
            </Link>
            <small className="text-gray">{video.creator}</small>
            <p className="text-gray text-xxs">{video.views} views</p>
            <p className="text-gray text-xxs">{formatDate()}</p>
          </div>

          <div>
            <BsThreeDotsVertical
              className={`${styles.options_btn} pointer text-dark`}
              onClick={() => menuDispatch({ type: "TOGGLE_MENU" })}
            />
            {menuState.showMenu && (
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
                  <small
                    onClick={() =>
                      menuDispatch({ type: "TOGGLE_PLAYLIST_OPTIONS" })
                    }
                  >
                    Add to Playlist
                  </small>
                  {menuState.playlistOptions && (
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
                                onChange={(e) =>
                                  playlistOpsHandler(e, list._id)
                                }
                              />
                              {list.title}
                            </label>
                          </small>
                        </li>
                      ))}
                      <li className="my-xs">
                        <input
                          id="createPlaylist"
                          className="input border-transparent br-s"
                          type="text"
                          value={menuState.input}
                          placeholder="Playlist Name"
                          onChange={(e) =>
                            menuDispatch({
                              type: "SET_INPUT",
                              payload: e.target.value,
                            })
                          }
                        />
                        <button
                          className={`${styles.create_btn} my-xs px-xs br-s`}
                          htmlFor="createPlaylist"
                          onClick={playlistCreator}
                        >
                          Create Playlist
                        </button>
                      </li>
                    </ul>
                  )}
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
