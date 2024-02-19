import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js";

// lines 7-11 and 15 - 36 refactored into routes.js
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import UserProfile from "./pages/UserProfile";
// import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(routes);

// const router = createBrowserRouter([
    // {
        // path:"/",
        // element: <Home />,
        // errorElement: <ErrorPage />
    // },
    // {
        // path: "/about",
        // element: <About />,
        // errorElement: <ErrorPage />
    // },
    // {
        // path: "/login",
        // element: <Login />,
        // errorElement: <ErrorPage />
    // },
    // {
        // path: "/profile/:id",
        // element: <UserProfile />,
        // errorElement: <ErrorPage />
    // }
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = { router } />);