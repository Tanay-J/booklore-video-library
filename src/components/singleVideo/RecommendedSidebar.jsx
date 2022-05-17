import { useEffect, useState } from "react";
import { getVideos } from "utils/service-requests/video-services";
import { RecommendedVideoCard } from "./RecommendedVideoCard";
import styles from "./singleVideo.module.css";
const RecommendedSidebar = () => {
  const { videoList } = getVideos();

  return (
    <aside>
      <ul className="mx-auto">
        <p className="text-dark text-xs font-bold">Recommended</p>
        {videoList.slice(0, 3).map((video) => {
          return (
            <li
              className={`${styles.card_container_no_button} my-xs`}
              key={video._id}
            >
              <RecommendedVideoCard video={video} />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export { RecommendedSidebar };
