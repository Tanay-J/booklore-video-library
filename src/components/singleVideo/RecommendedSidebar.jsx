import { useState } from "react";
import { getVideos } from "utils/service-requests/video-services";
import { RecommendedVideoCard } from "./RecommendedVideoCard";
import styles from "./singleVideo.module.css";
const RecommendedSidebar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { videoList } = getVideos("", setIsLoading);

  return (
    <aside>
      <ul className="mx-xl">
        <p className="text-dark text-s font-bold">Recommended</p>
        {videoList.slice(0, 3).map((video) => {
          return (
            <li
              className={`${styles.card_container_no_button} my-xs`}
              key={video._id}
            >
              <RecommendedVideoCard video={video} isLoading={isLoading} />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export { RecommendedSidebar };
