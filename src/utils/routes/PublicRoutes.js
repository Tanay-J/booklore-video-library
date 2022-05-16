import { Route, Routes } from "react-router-dom";
import { Explore, Homepage } from "pages";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
};

export { PublicRoutes };
