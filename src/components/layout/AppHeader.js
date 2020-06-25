import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import * as ROUTES from "../../constants/routes";
import { TogglerContext } from "../../context/TogglerContext";

const AppHeader = () => {
  const { setTogglerState } = useContext(TogglerContext);

  const renderUserOptions = () => {
    return (
      <NavLink to={ROUTES.DASHBOARD} className="nav-user-options">
        <div className="user-avatar">
          <h6 className="mb-0">J</h6>
        </div>
        <p className="user-avatar-name mb-0 px-2">John Doe</p>
      </NavLink>
    );
  };

  const renderMainNav = () => {
    return (
      <Navbar.Collapse>
        <Nav className="ml-auto" as="ul">
          <Nav.Item as="li">
            <NavLink className="nav-link" to={ROUTES.HOME} exact>
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink className="nav-link" to={ROUTES.SIGN_IN}>
              Sign In
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink className="nav-link" to={ROUTES.REGISTER}>
              Register
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    );
  };

  return (
    <Navbar bg="white" expand="lg" variant="light" className="app-shadow">
      <div className="app-menu-toggler" onClick={() => setTogglerState(true)}>
        <span className="fas fa-bars"></span>
      </div>
      <Navbar.Brand>
        <h5 className="mb-0 mx-2">GCC App</h5>
      </Navbar.Brand>
      {renderMainNav()}
      {renderUserOptions()}
    </Navbar>
  );
};

export default AppHeader;
