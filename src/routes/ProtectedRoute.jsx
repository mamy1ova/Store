import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Element, isAuth, fallbackPath }) => {
  if (!isAuth) {
    return <Navigate to={fallbackPath} replace />;
  }
  return Element;
};

export default ProtectedRoute;
