import React from "react";
import Joi from "@hapi/joi";
import * as ROUTES from "../../../constants/routes";
import Form from "../../shared/FormComponents/Form";
import { Form as BForm } from "react-bootstrap";

class Register extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    name: Joi.string().required().label("Name"),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
      .label("Email"),
    password: Joi.string().min(6).required().label("Password"),
  });

  doSubmit() {
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="form-auth">
        <BForm>
          {this.renderBrand("Create your account")}
          {this.renderInput("name", "Name", "text")}
          {this.renderInput("email", "Email", "text")}
          {this.renderInput("password", "Password", "password")}
          {this.renderSubmitButton("Register", true)}
        </BForm>
        {this.renderBottomLink(
          "Already have an account?",
          "Sign In",
          ROUTES.SIGN_IN
        )}
      </div>
    );
  }
}

export default Register;
