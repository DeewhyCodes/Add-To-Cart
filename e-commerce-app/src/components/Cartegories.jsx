import React from "react";
import { useSharedContext } from "../context/SharedAppContex";

const Cartegories = () => {
  const { handleCategoryFilter } = useSharedContext();
  const handleCategory = (e) => {
    const selectedCategory = e.target.value;
    handleCategoryFilter(selectedCategory);
  };

  return (
    <div className="category">
      <h3>Categories</h3>
      <ul>
        <li>
          <label>
            <input
              type="radio"
              name="category"
              value="all"
              onChange={handleCategory}
            />
            All
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="category"
              value="men's clothing"
              onChange={handleCategory}
            />
            Men's Clothing
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="category"
              value="jewelery"
              onChange={handleCategory}
            />
            Jewelry
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="category"
              value="electronics"
              onChange={handleCategory}
            />
            Electronics
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="category"
              value="women's clothing"
              onChange={handleCategory}
            />
            Women's Clothing
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Cartegories;
