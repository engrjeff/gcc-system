import React from "react";
import Wrapper from "../../shared/Misc/Wrapper";
import { Row, Col } from "react-bootstrap";
import {
  mapMemberType,
  mapCellStatus,
  mapChurchStatus,
} from "../../../helpers/utils";
import ProfileIconBar from "./ProfileIconBar";

const ProfileChurchInfo = ({ user, userProfile }) => {
  const { cellStatus, churchStatus, type } = userProfile.profile;

  return (
    <Wrapper m="my-3" p="p-0">
      <ProfileIconBar icon="info-circle" text="Church-Related Information" />
      <div className="profile-card column">
        <Row>
          <Col xs={5} md={3}>
            <p className="profile-text">Cell Leader</p>
          </Col>
          <Col xs={7} md={9}>
            {user.role === "admin" && !user.leader ? (
              <p className="profile-text info">Main Admin</p>
            ) : (
              <p className="profile-text info">{user.leader.name}</p>
            )}
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <p className="profile-text">Member Type</p>
          </Col>
          <Col xs={7} md={9}>
            <p className="profile-text info">{mapMemberType(type)}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <p className="profile-text">Cell Group Status</p>
          </Col>
          <Col xs={7} md={9}>
            <p className="profile-text info">{mapCellStatus(cellStatus)}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <p className="profile-text">Church Attendance</p>
          </Col>
          <Col xs={7} md={9}>
            <p className="profile-text info">{mapChurchStatus(churchStatus)}</p>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default ProfileChurchInfo;
