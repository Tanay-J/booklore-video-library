import { VideoCard } from "components/listing";
import { Navbar, Sidebar } from "components/navigation";
import { useData } from "contexts/data-context";
import styles from "./watchlater.module.css";

const Watchlater = () => {
  const {
    dataState: { watchlater },
  } = useData();

  return (
    <>
      <Navbar />
      <main className="main-container m-s">
        <Sidebar />
        <div>
          <p className=" mx-s text-s text-dark font-bold">Watch Later</p>
          {watchlater.length === 0 && (
            <p className="text-m text-center text-gray my-xl">
              Nothing in here
            </p>
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
