import React from "react";
import { Link } from "react-router-dom";
import { useSharedContext } from "../context/SharedAppContex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ cartState, cartDispatch }) => {
  const { filteredProducts } = useSharedContext();

  const addToCart = (product) => {
    const existingItem = cartState.find((item) => item.id === product.id);

    if (existingItem) {
      toast.error("Product already in cart", {});
    } else {
      product = { ...product, quantity: 1 };
      cartDispatch({ type: "ADD_TO_CART", payload: product });
      toast.success("Product added to cart", {});
    }
  };

  return (
    <div className="products_container">
      <div className="products_grid">
        {filteredProducts.map((product) => (
          <div className="products" key={product.id}>
            <Link to={`/ProductDetails/${product.id}`}>
              <div className="product_item">
                <div className="image_container">
                  <img src={product.image} alt={product.name} />
                </div>
              </div>
              <div className="price">
                <p>${product.price}</p>
              </div>
            </Link>
            <div className="bottom_container">
              <p>{product.title.slice(0, 15)}</p>
              {cartState.some((item) => item.id === product.id) ? (
                <button className="add_to_cart" disabled={true}>
                  <i className="bi bi-cart3"></i>
                  <span>Already in Cart</span>
                </button>
              ) : (
                <button
                  className="add_to_cart"
                  onClick={() => addToCart(product)}
                >
                  <i className="bi bi-cart3"></i>
                  <span>Add to cart</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
