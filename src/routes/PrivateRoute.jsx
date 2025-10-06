import { Navigate } from "react-router";
import UseAuth from "../hooks/UseAuth";
import Loading from "../pages/Shared/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    if (loading) <Loading />
    if (!user) <Navigate to={'/login'} />
    return children
};

export default PrivateRoute;