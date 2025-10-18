import { Navigate, useLocation } from "react-router";
import UseAuth from "../hooks/UseAuth";
import Loading from "../pages/Shared/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation();




    if (loading) return <Loading />
    if (!user) return <Navigate state={{ from: location.pathname }} to={'/login'} />
    return children
};

export default PrivateRoute;