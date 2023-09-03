import React from "react";
import "./PaymentPage.css";

const PaymentPage = ({ cartState }) => {
  console.log(cartState);
  return (
    <div className="payment-page">
      <div className="products-info">
        <h2>Products Information:</h2>
        <ul>
          {cartState.map((product) => (
            <li key={product.id}>
              <span>{product.name}</span>
              <span>${product.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="payment-info">payment info</div>
    </div>
  );
};

export default PaymentPage;
