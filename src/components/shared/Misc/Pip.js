import React from "react";

const Pip = ({ text, onDismiss, dismissable }) => {
  if (!text) return null;
  return (
    <div className="app-pip">
      <small className="app-pip-text">{text}</small>
      {dismissable && (
        <span className="app-pip-dismiss" onClick={onDismiss}>
          &times;
        </span>
      )}
    </div>
  );
};

Pip.defaultProps = {
  dismissable: false,
};

export default Pip;
