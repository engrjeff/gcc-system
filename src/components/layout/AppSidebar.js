import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { TogglerContext } from "../../context/TogglerContext";

const AppSidebar = () => {
  const MenuItems = [
    { path: ROUTES.DASHBOARD, icon: "columns", label: "Dashboard" },
    { path: ROUTES.PROFILE, icon: "user", label: "Profile" },
    { path: ROUTES.CELL_MEMBERS, icon: "user-friends", label: "Members" },
    { path: ROUTES.CELL_GROUPS, icon: "users", label: "Groups" },
    { path: ROUTES.CELL_REPORTS, icon: "sticky-note", label: "Reports" },
  ];

  const { togglerState, setTogglerState } = useContext(TogglerContext);

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

  const classes = `app-sidebar bg-primary text-white ${
    togglerState ? "show" : ""
  }`;

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

export default AppSidebar;
