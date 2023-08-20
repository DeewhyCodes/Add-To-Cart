import { createContext, useContext, useEffect, useState } from "react";
import { useAppContext } from "./Context";

export const SharedContext = createContext();

export const SharedContextProvider = ({ children }) => {
  const { state, dispatch } = useAppContext();
  const { products } = state;
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isUserMenuVisible, setUserMenuVisible] = useState(false);
  const [isNavmenuVisible, setNavmenuVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleUserMenu = () => {
    setUserMenuVisible((prevVisible) => !prevVisible);
  };

  const toggleNavmenu = () => {
    setNavmenuVisible((prevVisible) => !prevVisible);
  };

  const closeNavmenu = () => {
    setNavmenuVisible(false);
  };

  const closeUserMenu = () => {
    setUserMenuVisible(false);
  };

  const closeLinkMenu = () => {
    setNavmenuVisible(true);
  };

  const handleCategoryFilter = (category) => {
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: category });
    setSelectedCategory(category === "all" ? null : category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <SharedContext.Provider
      value={{
        filteredProducts,
        handleCategoryFilter,
        toggleUserMenu,
        toggleNavmenu,
        closeNavmenu,
        closeLinkMenu,
        closeUserMenu,
        isSmallScreen,
        isUserMenuVisible,
        isNavmenuVisible,
      }}
    >
      {children}
    </SharedContext.Provider>
  );
};

export const useSharedContext = () => useContext(SharedContext);
