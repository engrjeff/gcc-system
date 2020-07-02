import React from "react";
import { NavLink } from "react-router-dom";

const Tab = ({ tabItems }) => {
  return (
    <div className="tab app-shadow">
      {tabItems &&
        tabItems.map((item) => (
          <div key={item.id} className="tab-item">
            <NavLink to={item.path} className="tab-link">
              {item.label}
            </NavLink>
          </div>
        ))}
    </div>
  );
};

export default Tab;
