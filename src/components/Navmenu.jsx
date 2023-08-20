import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cartegories from "./Cartegories";
import { useSharedContext } from "../context/SharedAppContex";

const Navmenu = ({ isVisible }) => {
  const { toggleNavmenu, closeNavmenu, closeLinkMenu, isSmallScreen } =
    useSharedContext();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isVisible && !event.target.closest(".nav_menu")) {
        closeLinkMenu();
      }
    };

    if (isVisible && isSmallScreen) {
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

  return (
    <div className={`nav_menu ${isVisible && isSmallScreen ? "visible" : ""}`}>
      <Link to="" onClick={handleLinkClick}>
        <i className="bi bi-house-fill"></i>
        <p>Home</p>
      </Link>
      <Link to="/" onClick={handleLinkClick}>
        <i className="bi bi-shop"></i>
        <p>Shop</p>
      </Link>
      <Link to="/contact" onClick={handleLinkClick}>
        <i className="bi bi-person-lines-fill"></i>
        <p>Contact</p>
      </Link>
      <Cartegories />
    </div>
  );
};

export default Navmenu;
