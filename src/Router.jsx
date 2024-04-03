import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Image from "./Image";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "profile/:name",
            element: <Profile />,
        },
        {
            path: "profile",
            element: <Profile />,
        },
        {
            path: "image",
            element: <Image />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
