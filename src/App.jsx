import React from 'react';
import Navbar from "./components/Navbar.jsx";
import PostListPage from "./pages/PostListPage.jsx";
import {Outlet} from "react-router-dom";

function App(props) {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default App;
