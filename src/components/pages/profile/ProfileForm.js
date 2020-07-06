import React from "react";
import Joi from "@hapi/joi";
import Form from "../../shared/FormComponents/Form";
import { Form as BForm, Row, Col } from "react-bootstrap";
import { BackButton, Wrapper } from "../../shared/Misc/MiscComponents";
import FormHead from "../../shared/FormComponents/FormHead";
import {
  GENDERS,
  CELL_STATUS,
  CHURCH_STATUS,
  MEMBER_TYPES,
} from "../../../constants/appConstants";
import * as ROUTES from "../../../constants/routes";
import { parseDate } from "../../../helpers/utils";

class ProfileForm extends Form {
  state = {
    data: {
      address: "",
      birthdate: "",
      gender: "male",
      type: "",
      cellStatus: "",
      churchStatus: "",
    },
    errors: {},
  };

  schema = Joi.object({
    address: Joi.string().required().label("Address"),
    birthdate: Joi.string().required().label("Birthdate"),
    gender: Joi.string(),
    type: Joi.string(),
    cellStatus: Joi.string(),
    churchStatus: Joi.string(),
  });

  componentDidMount() {
    this.getProfileDataOnLoad();
  }

  getProfileDataOnLoad() {
    if (!this.props.userProfile.profile) return;
    const {
      address,
      birthdate,
      gender,
      type,
      cellStatus,
      churchStatus,
    } = this.props.userProfile.profile;
    const profileData = {
      address,
      birthdate: parseDate(birthdate),
      gender,
      type,
      cellStatus,
      churchStatus,
    };

    this.setState({ data: profileData });
  }

  doSubmit() {
    const profileData = { ...this.state.data };
    const { userProfile, saveProfile, history } = this.props;
    const isUpdate = userProfile.profile ? true : false;
    saveProfile(profileData, isUpdate, history, ROUTES.PROFILE);
  }

  render() {
    return (
      <div className="form-profile">
        <FormHead
          formTitle="Profile Form"
          formSubTitle="Provide details about you"
        >
          <BackButton
            isOnDark={true}
            onClick={() => this.props.history.push(ROUTES.PROFILE)}
          />
        </FormHead>
        <Wrapper>
          <BForm onSubmit={this.handleSubmit} className="p-2">
            {this.renderInput("address", "Address")}
            {this.renderDateInput("birthdate", "Birthdate", false)}
            <Row>
              <Col xs="12" md="6">
                {this.renderRadioGroup("gender", "Gender", GENDERS)}
              </Col>
              <Col xs="12" md="6">
                {this.renderSelect("type", "Member Type", MEMBER_TYPES)}
              </Col>
            </Row>
            <Row>
              <Col xs="12" md="6">
                {this.renderSelect(
                  "cellStatus",
                  "Cell Group Status",
                  CELL_STATUS
                )}
              </Col>
              <Col xs="12" md="6">
                {this.renderSelect(
                  "churchStatus",
                  "Church Status",
                  CHURCH_STATUS
                )}
              </Col>
            </Row>
            {this.renderSubmitButton("Save")}
          </BForm>
        </Wrapper>
      </div>
    );
  }
}

export default ProfileForm;
