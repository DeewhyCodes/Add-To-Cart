import React from "react";
import "./PaymentPage.css";

const PaymentPage = ({ cartState }) => {
  const initiatePayment = async (items) => {
    try {
      const response = await fetch("http://localhost:4000/PaymentPage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }), // Pass your list of items here
      });

      if (response.ok) {
        const data = await response.json();
        // Redirect the user to the Stripe checkout page using data.url
        window.location.href = data.url;
      } else {
        console.error("Payment initiation failed");
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };
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
