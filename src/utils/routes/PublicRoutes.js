import { Route, Routes } from "react-router-dom";
import { Explore, Homepage, SingleVideoPage } from "pages";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/video/:id" element={<SingleVideoPage />} />
    </Routes>
  );
};

export { PublicRoutes };
