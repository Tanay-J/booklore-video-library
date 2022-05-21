import { ThreeDots } from "react-loader-spinner";
import styles from "./loader.module.css";
const InlineLoader = () => {
  return (
    <div className={`${styles.loader_inline}`}>
      <ThreeDots width={30} height={5} color="gray" />
    </div>
  );
};
export { InlineLoader };
