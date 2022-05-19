import { Route, Routes } from "react-router-dom";
import { AllPlaylists, PlaylistPage, Watchlater } from "pages";
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
      <Route
        path="/playlists"
        element={
          <RequiresAuth>
            <AllPlaylists />
          </RequiresAuth>
        }
      />
      <Route
        path="/playlists/:id"
        element={
          <RequiresAuth>
            <PlaylistPage />
          </RequiresAuth>
        }
      />
    </Routes>
  );
};

export { PrivateRoutes };
