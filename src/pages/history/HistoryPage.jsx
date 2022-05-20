import { HistoryVideoCard } from "components/history";
import { Sidebar } from "components/navigation";
import { clearHistory } from "utils/service-requests/history-services";
import { useData } from "../../contexts/data-context";
import styles from "../explore/explore.module.css";

const HistoryPage = () => {
  const {
    dataState: { history },
    dataDispatch,
  } = useData();

  return (
    <>
      <main className={`main-container m-s`}>
        <Sidebar />
        <div>
          <div className="flex justify-content-space-bet m-s">
            <p className="mx-s text-s text-dark font-bold">History</p>
            <button
              className="btn btn-round btn-outline outline-secondary mx-s"
              onClick={() => clearHistory(dataDispatch)}
            >
              Clear
            </button>
          </div>

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
