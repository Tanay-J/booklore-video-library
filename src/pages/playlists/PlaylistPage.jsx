import { Link, useParams } from "react-router-dom";
import { VideoCard } from "components/listing";
import { Sidebar } from "components/navigation";
import { useData } from "../../contexts/data-context";
import styles from "./playlists.module.css";

const PlaylistPage = () => {
  const {
    dataState: { playlists },
  } = useData();
  const { id } = useParams();
  const currentPlaylist = playlists.find((list) => list._id === id);

  return (
    <main className={`main-container m-s`}>
      <Sidebar />
      <div>
        <p className="mx-s text-s text-dark font-bold">
          {currentPlaylist.title}
        </p>
        {!currentPlaylist.videos.length && (
          <div className="text-center">
            <p className="text-m text-gray my-xl">Nothing in here</p>
            <Link to="/explore">
              <button className="btn btn-primary">Explore</button>
            </Link>
          </div>
        )}
        <section className={`${styles.videolist_container}`}>
          {currentPlaylist.videos.map((video) => (
            <VideoCard video={video} />
          ))}
        </section>
      </div>
    </main>
  );
};
export { PlaylistPage };
