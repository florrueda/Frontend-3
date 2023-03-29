import React, {useContext} from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';

const Layout = () => {
    const {cart} = useContext(CartContext)
    return (
        <div>
            <Navbar></Navbar>
            <h3>Carrito: {cart.length}</h3>
            <Outlet></Outlet>
            <h1>Footer</h1>
        </div>
    );
}

export default Layout;
