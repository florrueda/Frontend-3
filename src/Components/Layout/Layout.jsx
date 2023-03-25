import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <h1>Footer</h1>
        </div>
    );
}

export default Layout;
