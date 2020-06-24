import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import SignIn from "../pages/auth/SignIn";
import Register from "../pages/auth/Register";
import Public from "../pages/home/Public";
import * as ROUTES from "../../constants/routes";

const AppContent = () => {
  return (
    <Container>
      <Switch>
        <Route path={ROUTES.HOME} component={Public} exact />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.REGISTER} component={Register} />
      </Switch>
    </Container>
  );
};

export default AppContent;
