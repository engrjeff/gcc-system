import React, { Fragment, useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Spinner } from "../shared/Misc/MiscComponents";
import { TogglerContext } from "../../context/TogglerContext";
import { connect } from "react-redux";
import { logout } from "../../state/actions/authActions";
import * as ROUTES from "../../constants/routes";

const AppHeader = (props) => {
  const { setTogglerState } = useContext(TogglerContext);

  const { isAuthenticated, loading, user, logout, history } = props;

  const renderUserOptions = () => {
    return isAuthenticated && user ? (
      <NavLink to={ROUTES.DASHBOARD} className="nav-user-options">
        <div className="user-avatar">
          <h6 className="mb-0">{user.name[0]}</h6>
        </div>
        <p className="user-avatar-name mb-0 px-2">{user.name}</p>
      </NavLink>
    ) : null;
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
          {!isAuthenticated && (
            <Fragment>
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
            </Fragment>
          )}
        </Nav>
      </Navbar.Collapse>
    );
  };

  const renderMenuToggler = () => {
    return isAuthenticated && user ? (
      <div
        className="app-menu-toggler"
        title="Sign Out"
        onClick={() => setTogglerState(true)}
      >
        <span className="fas fa-bars"></span>
      </div>
    ) : null;
  };

  const renderSignOutButton = () => {
    return isAuthenticated && user ? (
      <div
        className="app-signout-btn"
        title="Sign Out"
        onClick={() => logout(history, ROUTES.SIGN_IN)}
      >
        <span className="fas fa-sign-out-alt"></span>
      </div>
    ) : null;
  };

  const renderBrand = () => {
    return (
      <Navbar.Brand>
        <h5 className="mb-0 mx-2">GCC App</h5>
      </Navbar.Brand>
    );
  };

  return (
    <Navbar bg="white" expand="lg" variant="light" className="app-shadow">
      {loading && <Spinner />}
      {renderMenuToggler()}
      {renderBrand()}
      {renderMainNav()}
      {renderUserOptions()}
      {renderSignOutButton()}
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
    user: state.auth.user,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AppHeader));
