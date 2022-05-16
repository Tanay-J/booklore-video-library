import { Banner, Featured } from "components/homepage";
import { Navbar } from "components/navigation";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <section className="text-left m-m">
        <h3 className="text-dark m-s">Must Watch</h3>
        <Featured />
      </section>
    </div>
  );
};

export { Homepage };
