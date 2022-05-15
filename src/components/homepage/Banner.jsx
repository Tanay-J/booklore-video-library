import { Link } from "react-router-dom";
import styles from "./homepage.module.css";

const Banner = () => {
  return (
    <section className={`${styles.container} `}>
      <div className="pos-rel">
        <div className={`${styles.banner_text} text-white`}>
          <h2 className="my-s">Booklore</h2>
          <p className="my-s">All about books!</p>
          <Link to="/explore">
            <button className={`btn btn-primary`}>Explore</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export { Banner };
