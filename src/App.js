import "./App.css";
import { PrivateRoutes, PublicRoutes } from "./utils/routes";

function App() {
  return (
    <div>
      <PublicRoutes />
      <PrivateRoutes />
    </div>
  );
}

export default App;
