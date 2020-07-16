import React from "react";
import { Button } from "react-bootstrap";

const FloatingButton = ({ icon, onClick }) => {
  return (
    <div className="floating-btn">
      <Button onClick={onClick}>
        <span className={`fas fa-${icon}`}></span>
      </Button>
    </div>
  );
};

export default FloatingButton;
