import { createContext, useContext, useState } from "react";
import { useAppContext } from "./Context";

export const SharedContext = createContext();

export const SharedContextProvider = ({ children }) => {
  const { state, dispatch } = useAppContext();
  const { products } = state;
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryFilter = (category) => {
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: category });
    setSelectedCategory(category === "all" ? null : category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <SharedContext.Provider value={{ filteredProducts, handleCategoryFilter }}>
      {children}
    </SharedContext.Provider>
  );
};

export const useSharedContext = () => useContext(SharedContext);
