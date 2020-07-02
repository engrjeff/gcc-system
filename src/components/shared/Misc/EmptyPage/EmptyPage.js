import React from "react";
import "./emptypage.css";

const EmptyPage = ({ textToDisplay }) => {
  return <div className="app-empty-page">{textToDisplay}</div>;
};

export default EmptyPage;
