import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Coverage from "../pages/Home/Coverage";
import SendParcel from "../pages/SendParcel/SendPercel";
import PrivateRoute from "../routes/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'coverage',
                element: <Coverage />
            },
            {
                path: '/send-parcel',
                element: <PrivateRoute>
                    <SendParcel />
                </PrivateRoute>
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            
        ]
    }
]);

export default router;