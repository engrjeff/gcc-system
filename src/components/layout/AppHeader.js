import React, { Fragment, useContext, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Spinner, Modal } from "../shared/Misc/MiscComponents";
import { TogglerContext } from "../../context/TogglerContext";
import { connect } from "react-redux";
import { logout } from "../../state/actions/authActions";
import { getInitials } from "../../helpers/utils";
import * as ROUTES from "../../constants/routes";

const AppHeader = (props) => {
  const { setTogglerState } = useContext(TogglerContext);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);

  const { isAuthenticated, loading, user, logout, history } = props;

  const renderUserOptions = () => {
    return isAuthenticated && user ? (
      <div
        className="nav-user-options"
        onClick={() => setShowUserOptions((prev) => !prev)}
      >
        <div className="user-avatar">
          <h6 className="mb-0">{getInitials(user.name)}</h6>
        </div>
        <p className="user-avatar-name mb-0 px-2 d-none d-sm-block">
          {user.name}
        </p>
        <div
          className={`user-options app-shadow ${showUserOptions ? "show" : ""}`}
        >
          <NavLink className="nav-link options" to={ROUTES.PROFILE} exact>
            <span className="fas fa-user"></span> Profile
          </NavLink>
          <div
            className="nav-link options"
            onClick={() => setShowLogoutModal(true)}
          >
            <span className="fas fa-sign-out-alt"></span> Sign Out
          </div>
        </div>
      </div>
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
        onClick={() => setShowLogoutModal(true)}
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

  const renderModalForLogout = () => {
    return (
      <Modal
        title="Logout"
        shown={showLogoutModal}
        oKText="Confirm"
        onOk={handleLogout}
        onClose={() => setShowLogoutModal(false)}
      >
        <p className="mb-0">You are about to log out.</p>
      </Modal>
    );
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    logout(history, ROUTES.SIGN_IN);
  };

  return (
    <Navbar bg="white" expand="lg" variant="light" className="app-shadow">
      {loading && <Spinner />}
      {renderModalForLogout()}
      {renderMenuToggler()}
      {renderBrand()}
      {renderMainNav()}
      {renderUserOptions()}
      {false && renderSignOutButton()}
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
