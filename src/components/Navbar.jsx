import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useSharedContext } from "../context/SharedAppContex";
import AuthDetails from "./auth/AuthDetails";
import { ToastContainer } from "react-toastify";

const Navbar = ({ cartSize }) => {
  const { toggleUserMenu, toggleNavmenu, isUserMenuVisible, authUser } =
    useSharedContext();
  const displayMobileNav = location.pathname !== "/auth/AuthPage";

  return (
    <div className="nav">
      <div className="nav_left">
        <i className="bi bi-menu-button-wide-fill" onClick={toggleNavmenu}></i>
        <div className="logo">
          <h2>Shopping</h2>
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
      <AuthDetails />
      <div className="nav_right">
        <Cart cartSize={cartSize} />
        {authUser && (
          <i className="bi bi-person-circle" onClick={toggleUserMenu}></i>
        )}
      </div>
    </div>
  );
};

export default Navbar;
