import React from "react";
import {useNavigate, NavLink } from "react-router-dom";
import './Home.css'

const Home = () => {
  const navigate = useNavigate();

  const login = () => {
    //todo lo que tenga que hacer
    console.log("Ya termine el proceso");
    navigate("/products");
  };

  return (
    <div>
      <NavLink to="/login" className={({isActive}) => isActive ? "activeNavbar" : "navbar"}>
        <button>Login</button>
      </NavLink>
      <NavLink to="/cart" className={({isActive}) => isActive ? "activeNavbar" : "navbar"}>
        <button>Carrito</button>
      </NavLink>
      <NavLink to="/products" className={({isActive}) => isActive ? "activeNavbar" : "navbar"}>
        <button>Productos</button>
      </NavLink>
      <h1>Bienvenido!!!</h1>
      <button onClick={login}>Ingresar</button>
    </div>
  );
};

export default Home;
