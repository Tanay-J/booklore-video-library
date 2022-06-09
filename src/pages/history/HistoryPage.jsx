import { useState } from "react";
import { HistoryVideoCard } from "components/history";
import { InlineLoader } from "components/loader";
import { Sidebar } from "components/navigation";
import { clearHistory } from "utils/service-requests/history-services";
import { useData } from "contexts/data-context";
import styles from "../explore/explore.module.css";
import { Link } from "react-router-dom";

const HistoryPage = () => {
  const {
    dataState: { history },
    dataDispatch,
  } = useData();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <main className={`main-container m-s`}>
        <Sidebar />
        <div>
          <div className="flex justify-content-space-bet">
            <p className="mx-s text-s text-dark font-bold">History</p>
            <button
              className="btn btn-round btn-outline outline-secondary mx-m"
              onClick={() => clearHistory(dataDispatch, setIsLoading)}
            >
              {isLoading ? <InlineLoader /> : "Clear"}
            </button>
          </div>
          {!history.length && (
            <div className="text-center">
              <p className="text-m text-gray my-xl">Nothing in here</p>
              <Link to="/explore">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          )}
          <section className={`${styles.videolist_container}`}>
            {history.map((video) => (
              <HistoryVideoCard video={video} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
};
export { HistoryPage };
