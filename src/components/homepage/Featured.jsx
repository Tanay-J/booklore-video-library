import { useState } from "react";
import { getVideos } from "utils/service-requests/video-services";
import { VideoCard } from "components/listing";
import styles from "./homepage.module.css";

const Featured = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { videoList } = getVideos("", setIsLoading);
  videoList.sort((video1, video2) => video2.views - video1.views);

  return (
    <section className={`${styles.videolist_container}`}>
      {videoList.slice(0, 4).map((video) => (
        <VideoCard video={video} isLoading={isLoading} key={video._id} />
      ))}
    </section>
  );
};
export { Featured };
