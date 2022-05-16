import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { Navbar } from "components/navigation";
import { RecommendedSidebar, VideoDetails } from "components/singleVideo";
import styles from "./singleVideo.module.css";

const SingleVideoPage = () => {
  const {
    state: { currentVideo },
  } = useLocation();
  return (
    <>
      <Navbar />
      <main className={`${styles.main_container} my-s mx-l`}>
        <section key={currentVideo._id}>
          <p className="text-dark text-xs font-bold">{currentVideo.title}</p>
          <ReactPlayer url={currentVideo.url} width="100%" height="30rem" />
          <VideoDetails video={currentVideo} />
        </section>
        <RecommendedSidebar />
      </main>
    </>
  );
};
export { SingleVideoPage };
