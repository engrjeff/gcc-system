import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "@hapi/joi";
import * as ROUTES from "../../../constants/routes";
import Form from "../../shared/FormComponents/Form";
import { Form as BForm } from "react-bootstrap";
import { Spinner } from "../../shared/Misc/MiscComponents";

import { connect } from "react-redux";
import { register } from "../../../state/actions/authActions";

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
    const data = { ...this.state.data };
    data.leader = this.props.match.params.primary_id;
    this.props.register(data);
  }

  render() {
    if (this.props.isAuthenticated) return <Redirect to={ROUTES.DASHBOARD} />;

    return (
      <div className="form-auth">
        {this.props.loading && <Spinner />}
        <BForm onSubmit={this.handleSubmit}>
          {this.renderBrand("Create your account")}
          {this.renderInput("name", "Name", "text")}
          {this.renderInput("email", "Email", "text")}
          {this.renderInput("password", "Password", "password")}
          {this.props.signInError && this.renderError(this.props.signInError)}
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

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    isAuthenticated: state.auth.isAuthenticated,
    signInError: state.auth.error,
  };
};

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
