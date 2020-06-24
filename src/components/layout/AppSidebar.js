import React from "react";
import logo from "../../assets/logo.png";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  DASHBOARD,
  PROFILE,
  CELL_GROUPS,
  CELL_MEMBERS,
  CELL_REPORTS,
} from "../../constants/routes";

const AppSidebar = () => {
  const MenuItems = [
    { path: DASHBOARD, icon: "columns", label: "Dashboard" },
    { path: PROFILE, icon: "user", label: "Profile" },
    { path: CELL_MEMBERS, icon: "user-friends", label: "Members" },
    { path: CELL_GROUPS, icon: "users", label: "Groups" },
    { path: CELL_REPORTS, icon: "sticky-note", label: "Reports" },
  ];

  const renderSidebarMenu = () => {
    return (
      <Nav as="ul">
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
    <div className="app-sidebar bg-primary text-white">
      <div className="app-sidebar-head">
        <img src={logo} alt="gcc logo" className="app-sidebar-logo" />
        <p className="app-sidebar-text">Grace City Church</p>
      </div>
      {renderSidebarMenu()}
    </div>
  );
};

export default AppSidebar;
