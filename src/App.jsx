import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navmenu from "./components/Navmenu";
import ShoppingCart from "./components/ShoppingCart";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import { useAppContext } from "./context/Context";
import LoginPage from "./components/LoginPage";
import { AuthContextProvider } from "./components/authContext/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [isNavmenuVisible, setNavmenuVisible] = useState(false);
  const { state, dispatch, user, setUser } = useAppContext();
  const { cartState, isLoading, error, products } = state;

  const toggleNavmenu = () => {
    setNavmenuVisible(!isNavmenuVisible);
  };

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
    <AuthContextProvider>
      <div className="container">
        <Navbar cartSize={cartState.length} toggleNavmenu={toggleNavmenu} />
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
              <Route
                path="/LoginPage"
                element={<LoginPage user={user} setUser={setUser} />}
              />
              <Route
                path="/ShoppingCart"
                element={
                  <ShoppingCart cartState={cartState} cartDispatch={dispatch} />
                }
              />
              <Route path="/ProductDetails/:id" element={<ProductDetails />} />
            </Routes>
          </>
        )}
      </div>
    </AuthContextProvider>
  );
};

export default App;
