import { Link } from "react-router-dom";
import styles from "./homepage.module.css";

const Banner = () => {
  return (
    <section className={`${styles.container} pos-rel`}>
      <img
        className={`${styles.banner_img}`}
        src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740"
      />
      <div className={`${styles.banner_text} text-white`}>
        <h2 className="my-s">Booklore</h2>
        <p className="my-s">All about books!</p>
        <Link to="/explore">
          <button className={`btn btn-primary`}>Explore</button>
        </Link>
      </div>
    </section>
  );
};
export { Banner };
