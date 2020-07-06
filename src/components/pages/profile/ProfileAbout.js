import React from "react";
import Wrapper from "../../shared/Misc/Wrapper";
import { Row, Col } from "react-bootstrap";
import { parseDate } from "../../../helpers/utils";
import ProfileIconBar from "./ProfileIconBar";

const ProfileAbout = ({ user, userProfile }) => {
  const { address, birthdate, gender } = userProfile.profile;

  return (
    <Wrapper m="my-3" p="p-0">
      <ProfileIconBar icon="user" text="About" />
      <div className="profile-card column">
        <Row>
          <Col xs={5} md={3}>
            <p className="profile-text">Email</p>
          </Col>
          <Col xs={7} md={9}>
            <p className="profile-text info p-email">{user.email}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <p className="profile-text">Address</p>
          </Col>
          <Col xs={7} md={9}>
            <p className="profile-text info">{address}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <p className="profile-text">Birthday</p>
          </Col>
          <Col xs={7} md={9}>
            <p className="profile-text info">{parseDate(birthdate)}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <p className="profile-text">Gender</p>
          </Col>
          <Col xs={7} md={9}>
            <p className="profile-text info">{gender}</p>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default ProfileAbout;
