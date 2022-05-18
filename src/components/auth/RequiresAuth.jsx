import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "contexts/auth-context";

const RequiresAuth = ({ children }) => {
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const location = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
export { RequiresAuth };
