import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import SignIn from "../pages/auth/SignIn";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Public from "../pages/home/Public";
import ProfilePage from "../pages/profile/ProfilePage";
import AdminPage from "../pages/admin/AdminPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import CellGroupPage from "../pages/groups/CellGroupPage";
import CellMemberPage from "../pages/members/CellMemberPage";
import CellReportPage from "../pages/reports/CellReportPage";
import ChurchPage from "../pages/church/ChurchPage";
import NotFound from "../pages/Notfound/NotFound";
import ProtectedRoute from "../shared/ProtectedRoute";
import { Spinner } from "../shared/Misc/MiscComponents";
import * as ROUTES from "../../constants/routes";

const AppContent = (props) => {
  return (
    <Container>
      {props.loading && <Spinner />}
      <Switch>
        <Route path={ROUTES.HOME} component={Public} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.REGISTER} component={Register} />
        <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
        <Route path={ROUTES.NOT_FOUND} component={NotFound} />
        <ProtectedRoute path={ROUTES.DASHBOARD} component={DashboardPage} />
        <ProtectedRoute path={ROUTES.CELL_GROUPS} component={CellGroupPage} />
        <ProtectedRoute path={ROUTES.CELL_MEMBERS} component={CellMemberPage} />
        <ProtectedRoute path={ROUTES.CELL_REPORTS} component={CellReportPage} />
        <ProtectedRoute path={ROUTES.PROFILE} component={ProfilePage} />
        <ProtectedRoute path={ROUTES.ADMIN} component={AdminPage} />
        <ProtectedRoute path={ROUTES.CHURCH} component={ChurchPage} />
        <Redirect from={ROUTES.BASE} to={ROUTES.SIGN_IN} exact />
        <Redirect to={ROUTES.NOT_FOUND} />
      </Switch>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.ui.loading,
  };
};

export default connect(mapStateToProps)(AppContent);
