import { useState } from "react";
import { getCategories } from "utils/service-requests/video-services";
import styles from "./listing.module.css";

const CategoryChips = ({ setCategory }) => {
  const { categories } = getCategories();
  const [isActive, setIsActive] = useState("");

  return (
    <div className="mx-xs my-s">
      <button
        className={`${styles.chips} ${
          !isActive && "bg-primary text-light"
        } btn btn-outline outline-primary mx-xs`}
        onClick={() => {
          setCategory("");
          setIsActive("");
        }}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          className={`${styles.chips} ${
            isActive === cat && "bg-primary text-light"
          }  btn btn-outline outline-primary mx-xs`}
          onClick={() => {
            setCategory(cat.categoryName);
            setIsActive(cat);
          }}
          key={cat._id}
        >
          {cat.categoryName}
        </button>
      ))}
    </div>
  );
};
export { CategoryChips };
