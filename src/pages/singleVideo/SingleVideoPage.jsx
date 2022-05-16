import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Navbar } from "components/navigation";
import { RecommendedSidebar, VideoDetails } from "components/singleVideo";
import { getVideos } from "utils/service-requests/video-services";
import styles from "./singleVideo.module.css";

const SingleVideoPage = () => {
  const { id } = useParams();
  const { videoList } = getVideos();
  return (
    <>
      <Navbar />
      <main className={`${styles.main_container} my-s mx-l`}>
        <section>
          {videoList.map((video) => {
            if (video._id === id) {
              return (
                <div key={video._id}>
                  <p className="text-dark text-xs font-bold">{video.title}</p>
                  <ReactPlayer url={video.url} width="100%" height="30rem" />
                  <VideoDetails video={video} />
                </div>
              );
            }
          })}
        </section>
        <RecommendedSidebar />
      </main>
    </>
  );
};
export { SingleVideoPage };
