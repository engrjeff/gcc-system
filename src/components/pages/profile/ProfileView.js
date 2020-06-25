import React from "react";
import { Row, Col, Image, Badge, Button } from "react-bootstrap";
import test from "./jef.jpg";
import * as ROUTES from "../../../constants/routes";

const ProfileView = (props) => {
  const { history } = props;

  const goToEditProfile = () => {
    history.push(ROUTES.PROFILE_EDIT);
  };

  return (
    <div className="profile-view-container app-shadow bg-white px-4 py-3 mt-3">
      <div className="profile-view-head d-flex align-items-center mb-3">
        <Image
          src={test}
          roundedCircle
          style={{ width: "50px", height: "50px" }}
          className="app-shadow"
        />
        <div className="profile-name ml-4">
          <h4>Jeffrey Segovia</h4>
          <div className="d-flex">
            <Badge variant="primary">Cell Group Leader</Badge>
            <Badge variant="light-blue" className="text-sky-blue ml-2">
              Primary
            </Badge>
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
            <p>jeff@test.com</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <strong className="mb-0 text-primary">Address</strong>
          </Col>
          <Col xs={7} md={9}>
            <p>Some Fake St. Test City</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <strong className="mb-0 text-primary">Birthday</strong>
          </Col>
          <Col xs={7} md={9}>
            <p>March 12, 1996</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <strong className="mb-0 text-primary">Gender</strong>
          </Col>
          <Col xs={7} md={9}>
            <p>Male</p>
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
            <p>John de Guzman</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <strong className="mb-0 text-primary">Member Type</strong>
          </Col>
          <Col xs={7} md={9}>
            <p>Young Professional</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <strong className="mb-0 text-primary">Cell Group Status</strong>
          </Col>
          <Col xs={7} md={9}>
            <p>Regular</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} md={3}>
            <strong className="mb-0 text-primary">Church Attendance</strong>
          </Col>
          <Col xs={7} md={9}>
            <p>Consistent</p>
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
