import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cartegories from "./Cartegories";

const Products = ({ products, cartState, cartDispatch }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const addToCart = (product) => {
    const existingItem = cartState.find((item) => item.id === product.id);
    if (existingItem) {
      setShowToast(true);
    } else {
      product = { ...product, quantity: 1 };
      cartDispatch({ type: "ADD_TO_CART", payload: product });
      setShowToast(true);
    }

    setAddedProduct(product);
    setTimeout(() => {
      setShowToast(false);
      setAddedProduct(null);
    }, 2000);
  };

  return (
    <div className="products_container">
      {showToast && cartState && (
        <div className={`toast_notification ${showToast ? "" : "visible"}`}>
          <i className="bi bi-exclamation-circle"></i>
          <span>
            {cartState.some((item) => item.id === addedProduct.id)
              ? "Product added to cart"
              : "Product already in the cart"}
          </span>
        </div>
      )}
      <div className="products_grid">
        {filteredProducts.map((product) => (
          <div className="products" key={product.id}>
            <Link to={`/ProductDetails/${product.id}`}>
              <div className="product_item">
                <div className="image_container">
                  <img src={product.image} alt={product.name} />
                  <p>${product.price}</p>
                </div>
              </div>
            </Link>
            <div className="bottom_container">
              <p>{product.title.slice(0, 20)}</p>
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
      <button type="button" onClick={() => handleLogout()}>
        Log out
      </button>
      <Cartegories onCategoryFilter={handleCategoryFilter} />
    </div>
  );
};

export default Products;
