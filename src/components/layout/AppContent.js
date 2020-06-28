import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import SignIn from "../pages/auth/SignIn";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Public from "../pages/home/Public";
import ProfilePage from "../pages/profile/ProfilePage";
import AdminPage from "../pages/admin/AdminPage";
import ProtectedRoute from "../shared/ProtectedRoute";
import * as ROUTES from "../../constants/routes";

const AppContent = () => {
  return (
    <Container>
      <Switch>
        <Route path={ROUTES.HOME} component={Public} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.REGISTER} component={Register} />
        <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
        <ProtectedRoute path={ROUTES.PROFILE} component={ProfilePage} />
        <ProtectedRoute path={ROUTES.ADMIN} component={AdminPage} />
        <Redirect from={ROUTES.BASE} to={ROUTES.SIGN_IN} exact />
      </Switch>
    </Container>
  );
};

export default AppContent;
