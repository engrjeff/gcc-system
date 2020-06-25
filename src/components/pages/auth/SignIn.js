import React from "react";
import Joi from "@hapi/joi";
import * as ROUTES from "../../../constants/routes";
import Form from "../../shared/FormComponents/Form";
import { Form as BForm } from "react-bootstrap";

class SignIn extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });

  doSubmit() {
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="form-auth">
        <BForm>
          {this.renderBrand()}
          {this.renderInput("email", "Email", "text")}
          {this.renderInput("password", "Password", "password")}
          {this.renderForgotPassword(ROUTES.FORGOT_PASSWORD)}
          {this.renderSubmitButton("Sign In", true)}
          {this.renderOr()}
        </BForm>
        {this.renderGoogleButton()}
        {this.renderBottomLink(
          "Don't have an account?",
          "Register",
          ROUTES.REGISTER
        )}
      </div>
    );
  }
}

export default SignIn;
