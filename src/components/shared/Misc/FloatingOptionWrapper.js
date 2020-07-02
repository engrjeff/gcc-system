import React from "react";

const FloatingOptionWrapper = ({ shown, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={
        shown ? "floating-option-wrapper show" : "floating-option-wrapper"
      }
    >
      {children}
    </div>
  );
};

export default FloatingOptionWrapper;
