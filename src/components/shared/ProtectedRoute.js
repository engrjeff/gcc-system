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
  const renderRedirect = (props) => {
    const token = localStorage.getItem("token");
    if (token) return <Redirect to={props.location} />;
    else
      return (
        <Redirect
          to={{
            pathname: ROUTES.SIGN_IN,
            state: { from: props.location },
          }}
        />
      );
  };

  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (!isAuthenticated) return renderRedirect(props);
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
