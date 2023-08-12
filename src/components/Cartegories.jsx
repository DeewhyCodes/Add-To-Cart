import React from "react";

const Cartegories = ({ onCategoryFilter }) => {
  const handleCategory = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === "all") {
      onCategoryFilter(null);
    } else {
      onCategoryFilter(selectedCategory);
    }
  };

  return (
    <div className="category">
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
