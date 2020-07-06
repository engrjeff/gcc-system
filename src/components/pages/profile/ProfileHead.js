import React from "react";
import { Button, Badge } from "react-bootstrap";
import { Wrapper } from "../../shared/Misc/MiscComponents";
import { getInitials } from "../../../helpers/utils";

const ProfileHead = ({ user, onUpdateProfile }) => {
  return (
    <Wrapper m="my-3" p="p-0">
      <div className="profile-card">
        <div className="profile-avatar">
          <div className="user-avatar-large">{getInitials(user.name)}</div>
        </div>
        <div className="profile-name-wrapper">
          <p className="profile-text">{user.name}</p>
          <div className="profile-role">
            <p className="profile-text muted">Cell Group Leader</p>
            {user.role === "primary" && (
              <Badge
                variant="light-blue"
                className="text-sky-blue ml-2 profile-text"
                as="p"
              >
                Primary
              </Badge>
            )}
            {user.isAdmin && (
              <Badge variant="danger" className="ml-2 profile-text" as="p">
                Admin
              </Badge>
            )}
          </div>
          <p className="profile-text">Email</p>
          <p className="profile-text muted p-email">{user.email}</p>
        </div>
        <div className="profile-edit-button-div">
          <Button
            variant="primary"
            size="sm"
            className="ml-auto"
            onClick={onUpdateProfile}
          >
            <span className="fas fa-user-edit mr-2"></span>
            <span>Update Profile</span>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProfileHead;
