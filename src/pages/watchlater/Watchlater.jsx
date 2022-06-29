import { VideoCard } from "components/listing";
import { MobileSidebar, Navbar, Sidebar } from "components/navigation";
import { useData } from "contexts/data-context";
import { Link } from "react-router-dom";
import styles from "./watchlater.module.css";

const Watchlater = () => {
  const {
    dataState: { watchlater },
  } = useData();

  return (
    <>
      <main className="main-container m-s">
        <Sidebar />
        <MobileSidebar />
        <div>
          <p className="my-xs mx-s text-s text-dark font-bold">Watch Later</p>
          {watchlater.length === 0 && (
            <div className="text-center">
              <p className="text-m text-center text-gray my-xl">
                Nothing in here
              </p>
              <Link to="/explore">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          )}
          <section className={`${styles.videolist_container} my-s`}>
            {watchlater.map((video) => (
              <VideoCard video={video} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
};
export { Watchlater };
