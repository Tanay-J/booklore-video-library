import { Route, Routes } from "react-router-dom";
import {
  Explore,
  Homepage,
  LoginPage,
  SignupPage,
  SingleVideoPage,
} from "pages";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/video/:id" element={<SingleVideoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export { PublicRoutes };
