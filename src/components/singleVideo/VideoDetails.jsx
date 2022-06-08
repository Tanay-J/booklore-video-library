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

const VideoDetails = ({ video }) => {
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const {
    dataState: { watchlater, playlists, likes },
    dataDispatch,
  } = useData();
  const [showPlaylists, setShowPlaylists] = useState(false);

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

  const handleCreatePlaylist = (e) => {
    if (e.key === "Enter") {
      if (isAuthenticated) {
        createPlaylist(e.target.value, dataDispatch);
        e.target.value = "";
      } else toast.error("Please Login first");
    }
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

        <div className="pos-rel pointer">
          <div
            className="flex align-items-center"
            onClick={() => setShowPlaylists(!showPlaylists)}
          >
            <BsList /> <small className="mx-xs">Add to Playlist</small>
          </div>
          {showPlaylists && (
            <ul className={`${styles.options}`}>
              <small>Playlists</small>
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
                  className="input bg-transparent border-transparent text-dark"
                  type="text"
                  placeholder="Create Playlist"
                  onKeyDown={handleCreatePlaylist}
                />
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
        <button className="btn btn-primary">Subscribe</button>
      </div>
      <div className="text-dark my-s">
        <strong>Description</strong>
        <p>{video.description} </p>
      </div>
    </div>
  );
};
export { VideoDetails };
