import { Banner, Featured } from "components/homepage";
import { Navbar } from "components/navigation";

const Homepage = () => {
  return (
    <>
      <Banner />
      <section className="text-left m-m">
        <h3 className="text-dark m-s">Must Watch</h3>
        <Featured />
      </section>
    </>
  );
};

export { Homepage };
