import React, { useState, useEffect } from "react";
import './MessagePopup.css'

const MessagePopup = ({ message, isSuccess }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hiển thị trong 3 giây

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`popup ${isVisible ? "visible" : ""} ${isSuccess ? "success" : "error"}`}>
      {message}
    </div>
  );
};

export default MessagePopup;
