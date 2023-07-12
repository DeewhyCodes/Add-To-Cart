import React from "react";
import { Link } from "react-router-dom";
const Navmenu = ({ isVisible }) => {
  return (
    <div className={`nav_menu ${isVisible ? "visible" : ""}`}>
      <Link>Home</Link>
      <Link to="/">Shop</Link>
      <Link>Contact</Link>
    </div>
  );
};

export default Navmenu;
