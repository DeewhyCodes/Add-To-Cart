import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = ({ cartSize, toggleNavmenu, toggleCategories }) => {
  return (
    <div className="nav">
      <div className="nav_left">
        <i
          className="bi bi-list filter_category"
          onClick={toggleCategories}
        ></i>
        <i className="bi bi-list menu" onClick={toggleNavmenu}></i>
        <div className="logo">
          <h2>Shopping Cart</h2>
        </div>
      </div>
      <div className="nav_middle">
        <Link tp="">Home</Link>
        <Link to="/">Shop</Link>
        <Link>Contact</Link>
      </div>
      <div className="nav_right">
        <Cart cartSize={cartSize} />
        <i className="bi bi-person-circle"></i>
      </div>
    </div>
  );
};

export default Navbar;
