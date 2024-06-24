// src/components/common/Badge.js
import React from "react";
import Icon from "./Icon";

const Badge = ({ children, icon }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
      {icon && <Icon name={icon} className="mr-1" />}
      {children}
    </span>
  );
};

export default Badge;
