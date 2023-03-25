import React from "react";
import { NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
      >
        <button>Login</button>
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
      >
        <button>Carrito</button>
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
      >
        <button>Productos</button>
      </NavLink>

    </div>
  );
};

export default Navbar;
