import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Cartegories from "./Cartegories";
import { useSharedContext } from "../context/SharedAppContex";

const Navmenu = ({ isVisible }) => {
  const { toggleNavmenu, closeNavmenu, closeLinkMenu, isSmallScreen } =
    useSharedContext();

  const location = useLocation();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isVisible && !event.target.closest(".nav_menu")) {
        closeLinkMenu();
      }
    };

    if (isVisible) {
      document.body.addEventListener("click", handleOutsideClick);
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeEventListener("click", handleOutsideClick);
      document.body.style.overflow = "";
    }

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
      document.body.style.overflow = "";
    };
  }, [isVisible, toggleNavmenu]);

  const handleLinkClick = () => {
    closeNavmenu();
  };

  const isProductsPage = location.pathname == "/Products";

  return (
    <div className={`nav_menu ${isVisible ? "visible" : ""}`}>
      {isSmallScreen && isProductsPage ? (
        <>
          <Link to="/" onClick={handleLinkClick}>
            <i className="bi bi-house-fill"></i>
            <p>Home</p>
          </Link>
          <Link to="/Products" onClick={handleLinkClick}>
            <i className="bi bi-shop"></i>
            <p>Shop</p>
          </Link>
          <Link to="/Contact" onClick={handleLinkClick}>
            <i className="bi bi-person-lines-fill"></i>
            <p>Contact</p>
          </Link>
          <Cartegories />
        </>
      ) : (
        isProductsPage && <Cartegories />
      )}
      {isSmallScreen && !isProductsPage && (
        <>
          <Link to="/" onClick={handleLinkClick}>
            <i className="bi bi-house-fill"></i>
            <p>Home</p>
          </Link>
          <Link to="/Products" onClick={handleLinkClick}>
            <i className="bi bi-shop"></i>
            <p>Shop</p>
          </Link>
          <Link to="/Contact" onClick={handleLinkClick}>
            <i className="bi bi-person-lines-fill"></i>
            <p>Contact</p>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navmenu;
