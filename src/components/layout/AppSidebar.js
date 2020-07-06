import React, { useContext, Fragment } from "react";
import logo from "../../assets/logo.png";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { TogglerContext } from "../../context/TogglerContext";
import { connect } from "react-redux";

const AppSidebar = (props) => {
  const PersonalMenuItems = [
    { path: ROUTES.DASHBOARD, icon: "columns", label: "Dashboard" },
    { path: ROUTES.PROFILE, icon: "user", label: "Profile" },
  ];
  const CellGroupMenuItems = [
    { path: ROUTES.CELL_MEMBERS, icon: "user-friends", label: "Members" },
    { path: ROUTES.CELL_GROUPS, icon: "users", label: "Groups" },
    { path: ROUTES.CELL_REPORTS, icon: "sticky-note", label: "Reports" },
  ];

  const AdminMenuItems = [
    { path: ROUTES.ADMIN, icon: "user-lock", label: "Admin" },
  ];
  const { togglerState, setTogglerState } = useContext(TogglerContext);
  const { isAuthenticated, user } = props;

  const renderMenuLabel = (label) => {
    return <div className="nav-group-label">{label}</div>;
  };

  const renderNavLinks = (menuItems, label) => {
    return (
      <Fragment>
        {renderMenuLabel(label)}
        <Nav as="ul">
          {menuItems.map((item) => (
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
      </Fragment>
    );
  };

  const renderSidebarMenu = () => {
    return (
      <div onClick={() => setTogglerState(false)}>
        {isAuthenticated && user ? (
          <Fragment>
            {renderNavLinks(PersonalMenuItems, user.name)}
            {renderNavLinks(CellGroupMenuItems, "Cell Group Management")}
            {user.isAdmin && renderNavLinks(AdminMenuItems, "Administration")}
          </Fragment>
        ) : null}
      </div>
    );
  };

  const classes = `app-sidebar bg-primary text-white ${
    togglerState ? "show" : ""
  }`;

  return (
    <Fragment>
      {togglerState && (
        <div
          onClick={() => setTogglerState(false)}
          className="app-sidebar-overlay"
        ></div>
      )}
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
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(AppSidebar);
