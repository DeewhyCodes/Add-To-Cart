import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useSharedContext } from "../context/SharedAppContex";
import AuthDetails from "./auth/AuthDetails";

const Navbar = ({ cartSize }) => {
  const { toggleUserMenu, toggleNavmenu, authUser, isSmallScreen } =
    useSharedContext();
  const isShoppingCartPage = location.pathname === "/ShoppingCart";
  const isContactPage = location.pathname === "/Contact";

  return (
    <div className="nav">
      <div className="nav_left">
        {(!isSmallScreen && isShoppingCartPage) ||
        (!isSmallScreen && isContactPage) ? (
          ""
        ) : (
          <i
            className="bi bi-menu-button-wide-fill"
            onClick={toggleNavmenu}
          ></i>
        )}

        <Link to="/" className="logo">
          <div>
            <h2>Shopping Cart</h2>
          </div>
        </Link>
      </div>
      <div className="nav_middle">
        <Link to="/">
          <i className="bi bi-house-fill"></i>
          <p>Home</p>
        </Link>
        <Link to="/Products">
          <i className="bi bi-shop"></i>
          <p>Shop</p>
        </Link>
        <Link to="/Contact">
          <i className="bi bi-person-lines-fill"></i>
          <p>Contact</p>
        </Link>
      </div>
      <AuthDetails />
      <div className="nav_right">
        {authUser && (
          <>
            <Cart cartSize={cartSize} />
            <i className="bi bi-person-circle" onClick={toggleUserMenu}></i>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
