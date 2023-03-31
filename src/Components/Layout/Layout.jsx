import React, { useContext, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from "react-router-dom";
import { CartContextReducer } from '../../Context/CartContextReducer';

const Layout = () => {
    const { state, dispatch } = useContext(CartContextReducer);

  useEffect(()=> {
    dispatch({type:'GET_TOTAL_QUANTITY'})
  },[state.cart])

    return (
        <div>
            <Navbar></Navbar>
            <h3>{state.totalQuantity}</h3>
            <Outlet></Outlet>
            <h1>Footer</h1>
        </div>
    );
}

export default Layout;
