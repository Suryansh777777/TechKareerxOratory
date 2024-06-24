import React from "react";

const Icon = ({ name, ...props }) => {
  // This is a placeholder. You should use an actual icon library or SVG icons.
  return (
    <span className="material-icons" {...props}>
      {name}
    </span>
  );
};

export default Icon;
