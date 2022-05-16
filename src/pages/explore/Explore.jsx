import { CategoryChips, VideoCard } from "components/listing";
import { Navbar, Sidebar } from "components/navigation";
import { useState } from "react";
import { getVideos } from "utils/service-requests/video-services";
import styles from "./explore.module.css";

const Explore = () => {
  const [category, setCategory] = useState("");
  const { videoList } = getVideos(category);
  return (
    <>
      <Navbar />
      <div className={`main-container m-s`}>
        <Sidebar />
        <div>
          <CategoryChips setCategory={setCategory} />
          <article className={`${styles.videolist_container}`}>
            {videoList.map((video) => (
              <VideoCard video={video} key={video._id} />
            ))}
          </article>
        </div>
      </div>
    </>
  );
};
export { Explore };
