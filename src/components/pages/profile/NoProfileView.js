import React, { Fragment } from "react";
import { Wrapper, EmptyPage } from "../../shared/Misc/MiscComponents";
import ProfileHead from "./ProfileHead";

const NoProfileView = ({ user, onUpdateProfile }) => {
  return (
    <Fragment>
      <ProfileHead user={user} onUpdateProfile={onUpdateProfile} />
      <Wrapper m="my-3" p="p-3">
        <EmptyPage textToDisplay="You don't have a profile to display. Please update your profile now." />
      </Wrapper>
    </Fragment>
  );
};

export default NoProfileView;
