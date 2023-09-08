import React from "react";

const Success = () => {
  return (
    <div
      className="sucess"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        gap: "20px",
        height: "50vh",
      }}
    >
      <h1>Success</h1>
      <h2>Thank you for your purchase</h2>
    </div>
  );
};

export default Success;
