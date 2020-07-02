import React from "react";
import { Row, Col, Badge, Button } from "react-bootstrap";
import * as ROUTES from "../../../constants/routes";
import {
  parseDate,
  mapCellStatus,
  mapChurchStatus,
  mapMemberType,
} from "../../../helpers/utils";

const ProfileView = (props) => {
  const { history, userProfile, user } = props;

  const goToEditProfile = () => {
    history.push(ROUTES.PROFILE_EDIT);
  };

  if (!userProfile.profile)
    return (
      <div>
        <h1>You don't have set up a profile yet.</h1>
        <Button
          variant="primary"
          size="sm"
          className="ml-auto"
          onClick={goToEditProfile}
        >
          Create One
        </Button>
      </div>
    );

  const {
    address,
    birthdate,
    cellStatus,
    churchStatus,
    gender,
    type,
  } = userProfile.profile;

  return (
    <div className="profile-view-container app-shadow bg-white px-4 py-3 mt-3">
      <div className="profile-view-head d-flex align-items-center mb-3">
        <div className="app-shadow user-avatar-big">{user.name[0]}</div>
        <div className="profile-name ml-4">
          <h4>{user.name}</h4>
          <div className="d-flex">
            <Badge variant="primary">Cell Group Leader</Badge>
            {user.role === "primary" && (
              <Badge variant="light-blue" className="text-sky-blue ml-2">
                Primary
              </Badge>
            )}
          </div>
        </div>
      </div>

      <hr />
      <div className="profile-view-about">
        <div className="profile-view-about-head d-flex align-items-center">
          <span className="fas fa-user mr-2"></span>
          <p className="mb-0">About</p>
        </div>
        <br />
        <Row>
          <Col xs={5} md={3}>
            <strong className="text-primary">Email</strong>
          </Col>
          <Col xs={7} md={9}>
            <p className="p-email">{user.email}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <strong className="mb-0 text-primary">Address</strong>
          </Col>
          <Col xs={7} md={9}>
            <p>{address}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <strong className="mb-0 text-primary">Birthday</strong>
          </Col>
          <Col xs={7} md={9}>
            <p>{parseDate(birthdate)}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <strong className="mb-0 text-primary">Gender</strong>
          </Col>
          <Col xs={7} md={9}>
            <p>{gender}</p>
          </Col>
        </Row>

        <hr></hr>
        <div className="profile-view-info-head d-flex align-items-center">
          <span className="fas fa-info-circle mr-2"></span>
          <p className="mb-0">Church-Related Information</p>
        </div>
        <br />
        <Row>
          <Col xs={5} md={3}>
            <strong className="mb-0 text-primary">Cell Leader</strong>
          </Col>
          <Col xs={7} md={9}>
            <p>{user.leader.name}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <strong className="mb-0 text-primary">Member Type</strong>
          </Col>
          <Col xs={7} md={9}>
            <p>{mapMemberType(type)}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <strong className="mb-0 text-primary">Cell Group Status</strong>
          </Col>
          <Col xs={7} md={9}>
            <p>{mapCellStatus(cellStatus)}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <strong className="mb-0 text-primary">Church Attendance</strong>
          </Col>
          <Col xs={7} md={9}>
            <p>{mapChurchStatus(churchStatus)}</p>
          </Col>
        </Row>
      </div>
      <br />
      <Button
        variant="primary"
        size="sm"
        className="ml-auto"
        onClick={goToEditProfile}
      >
        Edit My Profile
      </Button>
    </div>
  );
};

export default ProfileView;
