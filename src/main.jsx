import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PostListPage from "./pages/PostListPage.jsx";
import NotFound404 from "./pages/errors/NotFound404.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound404 />,
        children: [
            { path: "/postlist", element: <PostListPage /> },
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
