import React from "react";

const Wrapper = ({ p, m, shadow, children }) => {
  const classes = `${p} ${m} ${shadow ? "app-shadow" : ""} bg-white wrapper`;
  return <div className={classes}>{children}</div>;
};

Wrapper.defaultProps = {
  p: "p-3",
  m: "m-0",
  shadow: true,
};

export default Wrapper;
