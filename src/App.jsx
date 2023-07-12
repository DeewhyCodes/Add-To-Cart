import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navmenu from "./components/Navmenu";
import ShoppingCart from "./components/ShoppingCart";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const getData = () => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    } else return [];
  };
  const [cart, setCart] = useState(getData());
  const [showToast, setShowToast] = useState(false);
  const [isNavmenuVisible, setNavmenuVisible] = useState(false);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleNavmenu = () => {
    setNavmenuVisible(!isNavmenuVisible);
  };
  return (
    <div className="container">
      <Navbar cartSize={cart.length} toggleNavmenu={toggleNavmenu} />
      <Navmenu isVisible={isNavmenuVisible} />
      <div className={`toast_notification ${showToast ? "" : "visible"}`}>
        <i className="bi bi-exclamation-circle"></i>
        <span>Item is already in the cart</span>
      </div>
      <Routes>
        <Route path="/" element={<Products addToCart={addToCart} />} />
        <Route
          path="/ShoppingCart"
          element={<ShoppingCart cart={cart} setCart={setCart} />}
        />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
