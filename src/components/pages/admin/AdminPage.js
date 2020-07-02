import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Tab from "../../shared/Misc/Tab";
import AdminMembers from "./AdminMembers";
import AdminUsers from "./AdminUsers";
import * as ROUTES from "../../../constants/routes";
import { getUsers } from "../../../state/actions/userActions";
import { Spinner } from "../../shared/Misc/MiscComponents";

const TabItems = [
  { id: 1, path: ROUTES.ADMIN_MEMBERS, label: "Members" },
  { id: 2, path: ROUTES.ADMIN_USERS, label: "Users" },
];

const AdminPage = (props) => {
  const { loading, getUsers } = props;

  useEffect(() => {
    const queryParams = {
      sortBy: "name",
    };
    getUsers(queryParams);
  }, [getUsers]);

  return (
    <div>
      {loading && <Spinner />}
      <div className="admin-page-head">
        <Tab tabItems={TabItems} />
      </div>
      <Switch>
        <Route path={ROUTES.ADMIN_MEMBERS} component={AdminMembers} />
        <Route path={ROUTES.ADMIN_USERS} component={AdminUsers} />
        <Redirect from={ROUTES.ADMIN} to={ROUTES.ADMIN_USERS} exact />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
  };
};
const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
