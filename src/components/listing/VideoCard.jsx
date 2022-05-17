import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillPlayCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import styles from "./listing.module.css";
import {
  addToWatchLater,
  removeFromWatchLater,
} from "utils/service-requests/watchlater-services";
import { useData } from "contexts/data-context";
import { useAuth } from "contexts/auth-context";

const VideoCard = ({ video }) => {
  const {
    dataState: { watchlater },
    dataDispatch,
  } = useData();
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <article className={`${styles.card_container} pos-rel mx-s`}>
      <div className={`${styles.thumbnail_container}  br-s pos-rel`}>
        <Link
          to={`/video/${video._id}`}
          state={{ currentVideo: video }}
          className="link-none text-black"
        >
          <img className={`${styles.thumbnail} br-s`} src={video.thumbnail} />
          <BsFillPlayCircleFill size="35px" className={`${styles.play_btn}`} />
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
                  setShowOptions(false);
                }}
              >
                <small> Watch Later</small>
              </li>
            ) : (
              <li
                className="text-danger px-xs my-xs pointer"
                onClick={() => removeFromWatchLater(video._id, dataDispatch)}
              >
                <small> Remove from Watch Later</small>
              </li>
            )}

            <li className=" px-xs my-xs pointer">
              <small>Add to Playlist</small>
            </li>
          </ul>
        )}
      </div>
    </article>
  );
};
export { VideoCard };
