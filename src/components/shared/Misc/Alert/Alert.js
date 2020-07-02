import React from "react";
import "./alert.css";

const Alert = ({ alert }) => {
  return (
    <div className={`app-alert app-alert-${alert.type}`}>{alert.content}</div>
  );
};

export default Alert;
