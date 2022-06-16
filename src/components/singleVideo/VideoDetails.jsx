import {
  BsHandThumbsUp,
  BsHandThumbsUpFill,
  BsHeart,
  BsHeartFill,
  BsList,
} from "react-icons/bs";
import { useState } from "react";
import { useAuth } from "contexts/auth-context";
import { useData } from "contexts/data-context";
import {
  addToWatchLater,
  removeFromWatchLater,
} from "utils/service-requests/watchlater-services";
import styles from "./singleVideo.module.css";
import {
  addToPlaylist,
  createPlaylist,
  removeFromPlaylist,
} from "utils/service-requests/playlist-services";
import {
  addToLikes,
  removeFromLikes,
} from "utils/service-requests/likes-services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const VideoDetails = ({ video }) => {
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const {
    dataState: { watchlater, playlists, likes },
    dataDispatch,
  } = useData();
  const navigate = useNavigate();
  const [showPlaylists, setShowPlaylists] = useState(false);
  const [input, setInput] = useState("");

  const isInPlaylist = (playlist) => {
    return playlist.videos.some(
      (playlistVideo) => playlistVideo._id === video._id
    );
  };

  const playlistOpsHandler = (e, playlistId) => {
    e.target.checked
      ? addToPlaylist(playlistId, video, dataDispatch)
      : removeFromPlaylist(playlistId, video._id, dataDispatch);
  };

  const isLiked = () => {
    return likes.some((likedVideo) => likedVideo._id === video._id);
  };

  const handleCreatePlaylist = () => {
    if (isAuthenticated) {
      if (input) {
        createPlaylist(input, dataDispatch);
        setInput("");
      } else toast.error("Playlist name can't be empty");
    } else navigate("/login");
  };
  return (
    <div>
      <div className="flex justify-content-end gap-2 text-dark my-s">
        <div className="flex align-items-center pointer">
          {!isLiked() ? (
            <BsHandThumbsUp
              className="mx-xs"
              onClick={() =>
                isAuthenticated
                  ? addToLikes(video, dataDispatch)
                  : toast.error("Please Login first")
              }
            />
          ) : (
            <BsHandThumbsUpFill
              className="mx-xs"
              onClick={() => removeFromLikes(video._id, dataDispatch)}
            />
          )}
          <small>Like</small>
        </div>

        {!watchlater.find((item) => item._id === video._id) ? (
          <div
            className="flex align-items-center pointer"
            onClick={() =>
              isAuthenticated
                ? addToWatchLater(video, dataDispatch)
                : toast.error("Please Login first")
            }
          >
            <BsHeart /> <small className="mx-xs">Add to Watch Later</small>
          </div>
        ) : (
          <div
            className="flex align-items-center pointer"
            onClick={() => removeFromWatchLater(video._id, dataDispatch)}
          >
            <BsHeartFill />
            <small className="mx-xs">Added to Watch Later</small>
          </div>
        )}

        <div className="pos-rel">
          <div
            className="flex align-items-center"
            onClick={() => setShowPlaylists(!showPlaylists)}
          >
            <BsList /> <small className="mx-xs">Add to Playlist</small>
          </div>
          {showPlaylists && (
            <ul className={`${styles.options}`}>
              <small>Playlists</small>
              {!playlists.length && (
                <li>
                  <small className="text-gray">No Playlists to show</small>
                </li>
              )}
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
                  className="input border-transparent br-s"
                  value={input}
                  type="text"
                  placeholder="Playlist Name"
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  className={`${styles.create_btn} pointer my-xs px-xs br-s`}
                  htmlFor="createPlaylist"
                  onClick={handleCreatePlaylist}
                >
                  Create Playlist
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className={`flex justify-content-space-bet my-s`}>
        <div className="flex">
          <img
            className={`${styles.avatar} avatar-circle avatar-s`}
            src={video.thumbnail}
          />
          <div className="mx-s">
            <p className="text-dark">{video.creator}</p>
            <small className="text-gray">{video.views} views</small>
          </div>
        </div>
      </div>
      <div className="text-dark my-s">
        <strong>Description</strong>
        <p>{video.description} </p>
      </div>
    </div>
  );
};
export { VideoDetails };
