import React from "react";
import "./button.scss";

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`custom-button ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
