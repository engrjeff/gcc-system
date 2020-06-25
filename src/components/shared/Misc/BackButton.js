import React from "react";

const BackButton = ({ onClick }) => {
  return (
    <div className="back-button" onClick={onClick}>
      <span className="fas fa-arrow-left"></span>
    </div>
  );
};

export default BackButton;
