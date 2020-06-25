import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import SignIn from "../pages/auth/SignIn";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Public from "../pages/home/Public";
import * as ROUTES from "../../constants/routes";
import ProfilePage from "../pages/profile/ProfilePage";

const AppContent = () => {
  return (
    <Container>
      <Switch>
        <Route path={ROUTES.HOME} component={Public} exact />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.REGISTER} component={Register} />
        <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
        <Route path={ROUTES.PROFILE} component={ProfilePage} />
      </Switch>
    </Container>
  );
};

export default AppContent;
