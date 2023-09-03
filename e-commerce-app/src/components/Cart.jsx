import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartSize }) => {
  return (
    <div className="cart">
      <Link to="/ShoppingCart">
        <i className="bi bi-cart3">
          <p>{cartSize < 1 ? "" : cartSize}</p>
        </i>
      </Link>
    </div>
  );
};

export default Cart;
