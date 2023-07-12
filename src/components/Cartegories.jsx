import React from "react";
import { useState, useEffect } from "react";

const Cartegories = ({ cartegories }) => {
  const [categery, setCategery] = useState(cartegories);
  return <div className="category"></div>;
};

export default Cartegories;
