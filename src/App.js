import "react-toastify/dist/ReactToastify.css";
import { PrivateRoutes, PublicRoutes } from "utils/routes";
import { MobileNavbar, Navbar } from "components/navigation";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <PublicRoutes />
      <PrivateRoutes />
    </div>
  );
}

export default App;
