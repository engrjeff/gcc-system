import React, { Fragment } from "react";
import * as ROUTES from "../../../constants/routes";
import NoProfileView from "./NoProfileView";
import ProfileHead from "./ProfileHead";
import ProfileAbout from "./ProfileAbout";
import ProfileChurchInfo from "./ProfileChurchInfo";

const ProfileView = (props) => {
  const { history, userProfile, user } = props;

  const goToEditProfile = () => {
    history.push(ROUTES.PROFILE_EDIT);
  };

  if (!user) return null;

  if (!userProfile.profile)
    return <NoProfileView user={user} onUpdateProfile={goToEditProfile} />;

  return (
    <Fragment>
      <ProfileHead user={user} onUpdateProfile={goToEditProfile} />
      <ProfileAbout user={user} userProfile={userProfile} />
      <ProfileChurchInfo user={user} userProfile={userProfile} />
    </Fragment>
  );
};

export default ProfileView;
