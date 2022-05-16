import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPlayCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import styles from "./listing.module.css";

const VideoCard = ({ video }) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <article className={`${styles.card_container} pos-rel mx-s`}>
      <div className={`${styles.thumbnail_container}  br-s pos-rel`}>
        <Link to={`/`} className="link-none text-black">
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
            <li className="px-xs my-xs pointer">
              <small> Watch Later</small>
            </li>

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
