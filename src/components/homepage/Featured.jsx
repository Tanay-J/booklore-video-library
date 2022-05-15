import { getVideos } from "../../utils/service-requests/video-services";
import { VideoCard } from "../listing";

const Featured = () => {
  const { videoList } = getVideos();
  return (
    <section className="grid grid-col-4 gap-1">
      {videoList.slice(0, 4).map((video) => (
        <VideoCard video={video} />
      ))}
    </section>
  );
};
export { Featured };
