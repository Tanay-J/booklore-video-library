import "./App.css";
import { PrivateRoutes, PublicRoutes } from "utils/routes";
import { Navbar } from "components/navigation";

function App() {
  return (
    <div>
      <Navbar />
      <PublicRoutes />
      <PrivateRoutes />
    </div>
  );
}

export default App;
