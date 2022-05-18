import { getVideos } from "utils/service-requests/video-services";
import { VideoCard } from "components/listing";
import styles from "./homepage.module.css";

const Featured = () => {
  const { videoList } = getVideos();
  return (
    <section className={`${styles.videolist_container}`}>
      {videoList.slice(0, 4).map((video) => (
        <VideoCard video={video} key={video._id} />
      ))}
    </section>
  );
};
export { Featured };
