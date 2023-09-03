import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navmenu from "./components/Navmenu";
import ShoppingCart from "./components/ShoppingCart";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import { useAppContext } from "./context/Context";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthPage from "./components/auth/AuthPage";
import { useSharedContext } from "./context/SharedAppContex";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Contact from "./components/Contact";
import PaymentPage from "./components/PaymentPage";

const App = () => {
  const { state, dispatch } = useAppContext();
  const { cartState, isLoading, error, products } = state;
  const { isNavmenuVisible, closeNavmenu, isUserMenuVisible, closeUserMenu } =
    useSharedContext();

  const location = useLocation();

  const fetchData = async () => {
    dispatch({ type: "START_FETCH" });
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch({ type: "FETCH_SUCCESSFUL", payload: data });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  location.pathname == "/" && closeNavmenu;

  return (
    <div className="container">
      {isNavmenuVisible && <div className="overlay" onClick={closeNavmenu} />}
      {isUserMenuVisible && (
        <div className="user_overlay" onClick={closeUserMenu} />
      )}
      <ToastContainer position="top-right" autoClose={2000} />
      {location.pathname !== "/" && location.pathname !== "/PaymentPage" && (
        <Navbar cartSize={cartState.length} />
      )}
      <Navmenu isVisible={isNavmenuVisible} />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error fetching products.</div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route
              path="/Products"
              element={
                <ProtectedRoute>
                  <Products
                    cartState={cartState}
                    products={products}
                    cartDispatch={dispatch}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="Contact" element={<Contact />} />
            <Route path="/auth/AuthPage" element={<AuthPage />} />
            <Route
              path="/ShoppingCart"
              element={
                <ProtectedRoute>
                  <ShoppingCart cartState={cartState} cartDispatch={dispatch} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/PaymentPage"
              element={<PaymentPage cartState={cartState} />}
            />
            <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
