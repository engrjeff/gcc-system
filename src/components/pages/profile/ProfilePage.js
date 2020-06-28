import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProfileView from "./ProfileView";
import ProfileForm from "./ProfileForm";
import { Spinner } from "../../shared/Misc/MiscComponents";

import { connect } from "react-redux";
import { getProfile, saveProfile } from "../../../state/actions/profileActions";
import * as ROUTES from "../../../constants/routes";

const ProfilePage = (props) => {
  const { userProfile, getProfile, saveProfile, user } = props;

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  if (userProfile.loading) return <Spinner />;

  return (
    <div>
      <Switch>
        <Route
          path={ROUTES.PROFILE_VIEW}
          render={(props) => (
            <ProfileView userProfile={userProfile} user={user} {...props} />
          )}
          exact
        />
        <Route
          path={ROUTES.PROFILE_EDIT}
          render={(props) => (
            <ProfileForm
              userProfile={userProfile}
              user={user}
              saveProfile={saveProfile}
              {...props}
            />
          )}
        />
        <Redirect from={ROUTES.PROFILE} to={ROUTES.PROFILE_VIEW} exact />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.profile,
    user: state.auth.user,
  };
};

const mapDispatchToProps = {
  getProfile,
  saveProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
