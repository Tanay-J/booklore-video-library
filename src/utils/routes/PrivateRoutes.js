import { Route, Routes } from "react-router-dom";
import { AllPlaylists, PlaylistPage, Watchlater } from "pages";
import { RequiresAuth } from "components/auth";
import { HistoryPage } from "pages/history/HistoryPage";

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
      <Route
        path="/history"
        element={
          <RequiresAuth>
            <HistoryPage />
          </RequiresAuth>
        }
      />
    </Routes>
  );
};

export { PrivateRoutes };
