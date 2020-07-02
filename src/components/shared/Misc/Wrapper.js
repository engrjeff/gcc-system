import React from "react";

const Wrapper = ({ padding = 3, shadow = true, children }) => {
  const classes = `p-${padding} ${shadow ? "app-shadow" : ""} bg-white`;
  return <div className={classes}>{children}</div>;
};

export default Wrapper;
