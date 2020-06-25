import React from "react";
import Joi from "@hapi/joi";
import Form from "../../shared/FormComponents/Form";
import { Form as BForm } from "react-bootstrap";
import * as ROUTES from "../../../constants/routes";

class ForgotPassword extends Form {
  state = {
    data: {
      email: "",
    },
    errors: {},
  };

  schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
      .label("Email"),
  });

  doSubmit() {
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="form-auth">
        <BForm>
          {this.renderBrand("Password Reset")}
          {this.renderInput("email", "Email", "text")}
          {this.renderSubmitButton("Submit", true)}
        </BForm>
        {this.renderBottomLink("", "Back to Sign In", ROUTES.SIGN_IN)}
      </div>
    );
  }
}

export default ForgotPassword;
