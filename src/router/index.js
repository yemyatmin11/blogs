import App from "../App";

import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/blogs/:id",
                element : <BlogDetails/>
            },
            {
                path : "*",
                element : <NotFound/>
            }
        ]
    },
]);

export default router;

