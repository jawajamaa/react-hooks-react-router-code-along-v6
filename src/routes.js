import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile"
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/About",
        element: <About />,
        errrorElement: <ErrorPage />
    },
    {
        path: "/Login",
        element: <Login />,
        errrorElement: <ErrorPage />    
    },
    {
        path: "/profile/:id",
        element: <UserProfile />,
        errrorElement: <ErrorPage />
    }
];

export default routes;