import React from "react";

const ToastNotification = ({ icon, message }) => {
  return (
    <div className="toast_notification">
      <span>
        {icon}
        {message}
      </span>
    </div>
  );
};

export default ToastNotification;
