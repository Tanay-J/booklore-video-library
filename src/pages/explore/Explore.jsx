import {
  CategoryChips,
  MobileCategoryChips,
  SortBy,
  VideoCard,
} from "components/listing";
import { MobileSidebar, Sidebar } from "components/navigation";
import { useEffect, useState } from "react";
import { getVideos } from "utils/service-requests/video-services";
import styles from "./explore.module.css";

const Explore = () => {
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { videoList } = getVideos(category, setIsLoading);
  const [newVideoList, setNewVideoList] = useState([]);

  useEffect(() => {
    setNewVideoList(videoList);
  }, [videoList]);

  return (
    <>
      <main className={`main-container m-s`}>
        <Sidebar />
        <MobileSidebar />
        <div>
          <div className="flex justify-content-space-bet mx-s">
            <CategoryChips setCategory={setCategory} />
            <MobileCategoryChips setCategory={setCategory} />
            <SortBy videoList={videoList} setNewVideoList={setNewVideoList} />
          </div>

          <article className={`${styles.videolist_container} px-s`}>
            {newVideoList.map((video) => (
              <VideoCard video={video} isLoading={isLoading} key={video._id} />
            ))}
          </article>
        </div>
      </main>
    </>
  );
};
export { Explore };
