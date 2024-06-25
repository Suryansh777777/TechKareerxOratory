// src/components/common/Button.js
import React from "react";

const Button = ({ children, variant = "primary", ...props }) => {
  const baseClasses = "px-10 py-3 rounded font-medium";
  const variantClasses = {
    primary: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
