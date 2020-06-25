import React from "react";
import { Switch, Route } from "react-router-dom";
import ProfileView from "./ProfileView";
import ProfileForm from "./ProfileForm";
import * as ROUTES from "../../../constants/routes";

const ProfilePage = () => {
  return (
    <div>
      <Switch>
        <Route path={ROUTES.PROFILE} component={ProfileView} exact />
        <Route path={ROUTES.PROFILE_EDIT} component={ProfileForm} />
      </Switch>
    </div>
  );
};

export default ProfilePage;
