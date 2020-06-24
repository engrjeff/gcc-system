import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { TogglerContext } from "../../context/TogglerContext";

import {
  DASHBOARD,
  PROFILE,
  CELL_GROUPS,
  CELL_MEMBERS,
  CELL_REPORTS,
} from "../../constants/routes";

const AppMobileSidebar = () => {
  const MenuItems = [
    { path: DASHBOARD, icon: "columns", label: "Dashboard" },
    { path: PROFILE, icon: "user", label: "Profile" },
    { path: CELL_MEMBERS, icon: "user-friends", label: "Members" },
    { path: CELL_GROUPS, icon: "users", label: "Groups" },
    { path: CELL_REPORTS, icon: "sticky-note", label: "Reports" },
  ];

  const { togglerState, setTogglerState } = useContext(TogglerContext);
  const classes = `app-sidebar bg-primary text-white mobile app-shadow d-block d-sm-none ${
    togglerState ? "show" : ""
  }`;
  const renderSidebarMenu = () => {
    return (
      <Nav as="ul" onClick={() => setTogglerState(false)}>
        {MenuItems.map((item) => (
          <Nav.Item as="li" className="app-sidebar-item" key={item.path}>
            <NavLink to={item.path} className="app-sidebar-link">
              <span
                className={`mx-3 fas fa-${item.icon} app-sidebar-icon`}
              ></span>
              <p className="mb-0">{item.label}</p>
            </NavLink>
          </Nav.Item>
        ))}
      </Nav>
    );
  };

  return (
    <div className={classes}>
      <span
        className="fas fa-times menu-close-btn"
        onClick={() => setTogglerState(false)}
      ></span>
      <div className="app-sidebar-head">
        <img src={logo} alt="gcc logo" className="app-sidebar-logo" />
        <p className="app-sidebar-text">Grace City Church</p>
      </div>
      {renderSidebarMenu()}
    </div>
  );
};

export default AppMobileSidebar;
