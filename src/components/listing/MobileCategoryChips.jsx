import { useState } from "react";
import { BsFillFilterCircleFill } from "react-icons/bs";
import { getCategories } from "utils/service-requests/video-services";
import styles from "./listing.module.css";

const MobileCategoryChips = ({ setCategory }) => {
  const { categories } = getCategories();
  const [isActive, setIsActive] = useState("");
  const [showChips, setShowChips] = useState(false);

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
    <div className={`${styles.mob_chips_wrapper} mx-xs my-s`}>
      <BsFillFilterCircleFill
        onClick={() => setShowChips(!showChips)}
        className={`${styles.chips} text-primary text-m mx-xs`}
      />
      {showChips && (
        <div className={`${styles.mob_chips_container} card-shadow br-m p-m`}>
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
      )}
    </div>
  );
};
export { MobileCategoryChips };
