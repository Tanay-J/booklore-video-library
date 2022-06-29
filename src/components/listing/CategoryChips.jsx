import { useState } from "react";
import { getCategories } from "utils/service-requests/video-services";
import styles from "./listing.module.css";

const CategoryChips = ({ setCategory }) => {
  const { categories } = getCategories();
  const [isActive, setIsActive] = useState("");

  const chipClickHandler = (categoryName) => {
    if (isActive !== categoryName) {
      setCategory(categoryName);
      setIsActive(categoryName);
    } else {
      setCategory("");
      setIsActive("");
    }
  };

  return (
    <div className={`${styles.chips_wrapper} mx-xs my-s`}>
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
            isActive === cat.categoryName && "bg-primary text-light"
          }  btn btn-outline outline-primary mx-xs`}
          onClick={() => chipClickHandler(cat.categoryName)}
          key={cat._id}
        >
          {cat.categoryName}
        </button>
      ))}
    </div>
  );
};
export { CategoryChips };
