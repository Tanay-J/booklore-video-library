import { Link } from "react-router-dom";
import styles from "./singleVideo.module.css";

const RecommendedVideoCard = ({ video }) => {
  return (
    <>
      <div className={`${styles.thumbnail_container} br-s`}>
        <Link to={`/video/${video._id}`} state={{ currentVideo: video }}>
          <img
            className={`${styles.thumbnail} pointer br-s`}
            src={video.thumbnail}
          />
        </Link>
      </div>

      <img
        className={`${styles.avatar} avatar-circle avatar-s`}
        src={video.creatorAvatar}
      />
      <div className={`${styles.video_details}`}>
        <small className="text-dark font-bold">{video.title}</small>
        <p className="text-xxs text-gray">{video.creator}</p>
        <p className="text-gray text-xxs">{video.views} views</p>
      </div>
    </>
  );
};
export { RecommendedVideoCard };
