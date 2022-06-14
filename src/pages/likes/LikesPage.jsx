import { Link } from "react-router-dom";
import { VideoCard } from "components/listing";
import { Sidebar } from "components/navigation";
import { useData } from "contexts/data-context";
import styles from "../explore/explore.module.css";

const LikesPage = () => {
  const {
    dataState: { likes },
  } = useData();

  return (
    <main className={`main-container m-s`}>
      <Sidebar />
      <div>
        <p className="mx-s text-s text-dark font-bold">Liked Videos</p>
        {!likes.length && (
          <div className="text-center">
            <p className="text-m text-gray my-xl">Nothing in here</p>
            <Link to="/explore">
              <button className="btn btn-primary">Explore</button>
            </Link>
          </div>
        )}
        <section className={`${styles.videolist_container} my-s`}>
          {likes.map((video) => (
            <VideoCard video={video} />
          ))}
        </section>
      </div>
    </main>
  );
};
export { LikesPage };
