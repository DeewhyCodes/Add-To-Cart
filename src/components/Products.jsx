import React from "react";
import Data from "../Data/products.json";
import { Link } from "react-router-dom";
import Cartegories from "./Cartegories";

const Products = ({ addToCart }) => {
  const data = Data;

  return (
    <div className="products_container">
      <div className="products_grid">
        {data.map((product) => (
          <Link to={`/ProductDetails/${product.id}`} key={product.id}>
            <div className="product_item">
              <div className="image_container">
                <img src={product.image} alt={product.name} />
                <p>${product.price}</p>
              </div>
              <div className="bottom_container">
                <p>{product.title.slice(0, 20)}</p>
                <button
                  className="add_to_cart"
                  onClick={() => addToCart(product)}
                >
                  <i className="bi bi-cart3"></i>
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
            <Cartegories cartegories={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
