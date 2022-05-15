import { Banner, Featured } from "../../components/homepage";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <section className="text-left m-m">
        <h3 className="text-dark my-s">Must Watch</h3>
        <Featured />
      </section>
    </div>
  );
};

export { Homepage };
