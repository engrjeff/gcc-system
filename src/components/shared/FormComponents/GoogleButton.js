import React from "react";
import { Button } from "react-bootstrap";
import googleIcon from "./icons/google.svg";

const GoogleButton = () => {
  return (
    <Button block size="sm" className="bg-white text-primary">
      <div className="d-flex align-items-center justify-content-center">
        <img
          src={googleIcon}
          style={{ width: "24px", height: "24px", marginRight: "1rem" }}
          alt="google icon"
        />
        <p className="mb-0" style={{ fontWeight: "600" }}>
          Sign in with Google
        </p>
      </div>
    </Button>
  );
};

export default GoogleButton;
