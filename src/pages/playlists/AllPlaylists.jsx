import { Link } from "react-router-dom";
import { Sidebar } from "components/navigation";
import { PlaylistCard } from "components/playlists";
import { useData } from "contexts/data-context";
import styles from "./playlists.module.css";

const AllPlaylists = () => {
  const {
    dataState: { playlists },
  } = useData();

  return (
    <main className={`main-container m-s`}>
      <Sidebar />
      <div>
      <p className="mx-s text-s text-dark font-bold">Playlists</p>
        <section className={`${styles.videolist_container}`}>
          {playlists.map((playlist) => (
            <PlaylistCard playlist={playlist} />
          ))}
        </section>
        {!playlists.length && (
          <div className="text-center">
            <p className="text-m text-gray my-xl">Nothing in here</p>
            <Link to="/explore">
              <button className="btn btn-primary">Explore</button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};
export { AllPlaylists };
