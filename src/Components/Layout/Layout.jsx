import React, { useContext, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { CartContextReducer } from '../../Context/CartContextReducer';
import NavbarMaterial from './Navbar/NavbarMaterial';

const Layout = () => {
    const { state, dispatch } = useContext(CartContextReducer);

  useEffect(()=> {
    dispatch({type:'GET_TOTAL_QUANTITY'})
  },[state.cart])

    return (
        <div>
            <NavbarMaterial></NavbarMaterial>
            <h3>Cantidad {state.totalQuantity}</h3>
            <Outlet></Outlet>
            <h1>Footer</h1>
        </div>
    );
}

export default Layout;
