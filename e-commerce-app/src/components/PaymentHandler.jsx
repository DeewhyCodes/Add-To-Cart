// import React from "react";
// import ShoppingCart from "./ShoppingCart";

// const PaymentHandler = ({ cartState }) => {
//   const initiatePayment = async (cartState) => {
//     try {
//       const response = await fetch("http://localhost:4000/PaymentHandler", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ cartState }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         window.location.href = data.url;
//       } else {
//         console.error("Payment initiation failed");
//       }
//     } catch (error) {
//       console.error("Error initiating payment:", error);
//     }
//   };

//   return (
//     <div>
//       <ShoppingCart initiatePayment={initiatePayment} />
//     </div>
//   );
// };

// export default PaymentHandler;
