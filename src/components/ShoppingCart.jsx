import React from "react";
import { useState, useEffect } from "react";

const ShoppingCart = ({ cart, setCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        const newQuantity = (item.quantity || 1) + 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cart.reduce(
        (accumulator, item) => accumulator + item.price * (item.quantity || 1),
        0
      );
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cart]);

  return (
    <div className="cart_page">
      <div className="cart_content">
        <div className="cart_header">
          <h1>My Shopping Cart</h1>
          <div className="product_props">
            <div className="prop_names">
              <p>Item</p>
              <p>Name</p>
              <p>Quantity</p>
              <p>Remove</p>
              <p>Price</p>
            </div>
          </div>
        </div>
        <div className="products_list">
          {cart.length > 0 ? (
            <div className="product_cont">
              {cart.map((item) => (
                <ul key={item.id}>
                  <li>
                    <img src={item.image} alt={item.name} />
                  </li>
                  <li>
                    <p>{item.title.slice(0, 10)}</p>
                  </li>
                  <li>
                    <div className="amount">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        <i className="bi bi-dash-lg"></i>
                      </button>
                      <p>{item.quantity || 1}</p>
                      <button onClick={() => increaseQuantity(item.id)}>
                        <i className="bi bi-plus-lg"></i>
                      </button>
                    </div>
                  </li>
                  <li>
                    <button onClick={() => removeItem(item.id)}>
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </li>
                  <li>
                    <p>${item.price}</p>
                  </li>
                </ul>
              ))}
              <h3 className="product_total">Total ${totalPrice.toFixed(2)}</h3>
            </div>
          ) : (
            <h1 className="cart_empty">Your cart is empty</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
