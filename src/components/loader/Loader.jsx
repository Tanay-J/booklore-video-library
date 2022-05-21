import { ThreeDots } from "react-loader-spinner";
import styles from "./loader.module.css";
const Loader = () => {
  return (
    <div className={`${styles.loader}`}>
      <ThreeDots width={50} height={10} color="gray" />
    </div>
  );
};
export { Loader };
