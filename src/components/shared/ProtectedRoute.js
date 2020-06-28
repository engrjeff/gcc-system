import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as ROUTES from "../../constants/routes";

const ProtectedRoute = ({
  path,
  component: Component,
  render,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (!isAuthenticated) return <Redirect to={ROUTES.SIGN_IN} />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
