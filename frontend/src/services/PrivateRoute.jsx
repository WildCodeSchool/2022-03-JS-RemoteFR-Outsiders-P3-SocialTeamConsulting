import { Navigate } from "react-router-dom";

function PrivateRoute({ isAllowed, children }) {
  if (isAllowed) {
    return children;
  }
  return <Navigate to="/" />;
}

export default PrivateRoute;
