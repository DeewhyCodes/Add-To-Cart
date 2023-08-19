import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = ({ cartSize, toggleNavmenu }) => {
  return (
    <div className="nav">
      <div className="nav_left">
        <i className="bi bi-menu-button-wide-fill" onClick={toggleNavmenu}></i>
        <div className="logo">
          <h2>Shopping Cart</h2>
        </div>
      </div>
      <div className="nav_middle">
        <Link to="">
          <i className="bi bi-house-fill"></i>
          <p>Home</p>
        </Link>
        <Link to="/">
          <i className="bi bi-shop"></i>
          <p>Shop</p>
        </Link>
        <Link>
          <i className="bi bi-person-lines-fill"></i>
          <p>Contact</p>
        </Link>
      </div>
      <div className="nav_right">
        <Cart cartSize={cartSize} />
        <i className="bi bi-person-circle"></i>
      </div>
    </div>
  );
};

export default Navbar;
