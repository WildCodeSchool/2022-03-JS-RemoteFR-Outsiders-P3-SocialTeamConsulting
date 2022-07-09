import { Navigate } from "react-router-dom";

function PrivateRoute({ isAllowed, children }) {
  if (!isAllowed) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default PrivateRoute;
