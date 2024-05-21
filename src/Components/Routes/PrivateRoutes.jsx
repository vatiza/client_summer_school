import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvier";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();
  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress progress-warning w-56"></progress>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
