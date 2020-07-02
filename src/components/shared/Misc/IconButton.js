import React from "react";

const IconButton = ({ icon, onClick, active }) => {
  return (
    <div
      className={active ? "app-icon-button active" : "app-icon-button"}
      onClick={onClick}
    >
      <span className={`fas fa-${icon}`}></span>
    </div>
  );
};

export default IconButton;
