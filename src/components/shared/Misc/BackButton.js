import React from "react";

const BackButton = ({ onClick, isOnDark }) => {
  return (
    <div
      className={isOnDark ? "back-button on-dark" : "back-button"}
      onClick={onClick}
    >
      <span className="fas fa-arrow-left"></span>
    </div>
  );
};

export default BackButton;
