import { Route, Routes } from "react-router-dom";
import { Homepage } from "../../pages";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export { PublicRoutes };
