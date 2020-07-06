import React from "react";
import { Button } from "react-bootstrap";
import "./notfound.css";

const NotFound = (props) => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-page-404">404</h1>
      <p className="not-found-page-text">
        The page you requested cannot be found.
      </p>
      <Button variant="primary" onClick={() => props.history.push("/")}>
        Back to Dashboard
      </Button>
    </div>
  );
};

export default NotFound;
