import { useEffect, useState } from "react";
import styles from "./listing.module.css";

const SortBy = ({ videoList, setNewVideoList }) => {
  const [isActive, setIsActive] = useState("");

  const sortHandler = (sort) => {
    const sortedVideoList = new Array(...videoList);
    if (sort === "latest") {
      setIsActive("latest");
      sortedVideoList.sort(
        (a, b) => Date.parse(b.createdOn) - Date.parse(a.createdOn)
      );
    } else if (sort === "oldest") {
      setIsActive("oldest");
      sortedVideoList.sort(
        (a, b) => Date.parse(a.createdOn) - Date.parse(b.createdOn)
      );
    }
    setNewVideoList(sortedVideoList);
  };

  useEffect(() => setIsActive(""), [videoList]);

  return (
    <>
      <div className="mx-xs my-s">
        <button
          className={`${styles.chips} ${
            isActive === "latest" && "bg-primary text-light"
          } btn btn-outline outline-primary mx-xs`}
          onClick={() => sortHandler("latest")}
        >
          Latest first
        </button>
        <button
          className={`${styles.chips} ${
            isActive === "oldest" && "bg-primary text-light"
          } btn btn-outline outline-primary mx-xs`}
          onClick={() => sortHandler("oldest")}
        >
          Oldest first
        </button>
      </div>
    </>
  );
};
export { SortBy };
