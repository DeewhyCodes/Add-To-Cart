import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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

const App = () => {
  const { state, dispatch } = useAppContext();
  const { cartState, isLoading, error, products } = state;
  const {
    isNavmenuVisible,
    closeNavmenu,
    isUserMenuVisible,
    closeUserMenu,
    isSmallScreen,
  } = useSharedContext();

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

  return (
    <div className="container">
      {isNavmenuVisible && isSmallScreen && (
        <div className="overlay" onClick={closeNavmenu} />
      )}
      {isUserMenuVisible && (
        <div className="user_overlay" onClick={closeUserMenu} />
      )}
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar cartSize={cartState.length} />
      <Navmenu isVisible={isNavmenuVisible} />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error fetching products.</div>
      ) : (
        <>
          <Routes>
            <Route
              path="/"
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
            <Route path="/auth/AuthPage" element={<AuthPage />} />
            <Route
              path="/ShoppingCart"
              element={
                <ProtectedRoute>
                  <ShoppingCart cartState={cartState} cartDispatch={dispatch} />
                </ProtectedRoute>
              }
            />
            <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
