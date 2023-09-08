import React from "react";

const Cancel = () => {
  return (
    <div
      className="cancel"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        gap: "20px",
        height: "50vh",
      }}
    >
      <h1>Canceled</h1>
      <h2>Your payment was canceled</h2>
    </div>
  );
};

export default Cancel;
