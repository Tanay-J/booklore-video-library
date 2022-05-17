import { Route, Routes } from "react-router-dom";
import { Watchlater } from "pages";
import { RequiresAuth } from "components/auth";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route
        path="/watchlater"
        element={
          <RequiresAuth>
            <Watchlater />
          </RequiresAuth>
        }
      />
    </Routes>
  );
};

export { PrivateRoutes };
