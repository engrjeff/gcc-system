import React, { useState } from "react";

export const TogglerContext = React.createContext(null);

export const TogglerProvider = (props) => {
  const [togglerState, setTogglerState] = useState(false);

  return (
    <TogglerContext.Provider value={{ togglerState, setTogglerState }}>
      {props.children}
    </TogglerContext.Provider>
  );
};
