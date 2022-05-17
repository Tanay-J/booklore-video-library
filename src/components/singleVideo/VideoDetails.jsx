import {
  BsHandThumbsDown,
  BsHandThumbsUp,
  BsHeart,
  BsList,
} from "react-icons/bs";
import styles from "./singleVideo.module.css";

const VideoDetails = ({ video }) => {
  return (
    <div>
      <div className="flex justify-content-end gap-1 text-dark my-s ">
        <p>
          <BsHandThumbsUp /> Like
        </p>
        <p>
          <BsHandThumbsDown /> Dislike
        </p>
        <p>
          <BsHeart /> Add to Watch Later
        </p>
        <p>
          <BsList /> Add to Playlist
        </p>
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
