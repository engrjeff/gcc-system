import React from "react";

const Pip = ({ text, onDismiss }) => {
  if (!text) return null;
  return (
    <div className="app-pip">
      <small className="app-pip-text">{text}</small>
      <span className="app-pip-dismiss" onClick={onDismiss}>
        &times;
      </span>
    </div>
  );
};

export default Pip;
