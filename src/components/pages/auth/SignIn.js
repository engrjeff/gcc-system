import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "@hapi/joi";
import { Form as BForm } from "react-bootstrap";
import Form from "../../shared/FormComponents/Form";
import { Spinner } from "../../shared/Misc/MiscComponents";
import * as ROUTES from "../../../constants/routes";

import { connect } from "react-redux";
import { login, googleLogin } from "../../../state/actions/authActions";

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
    this.props.login(this.state.data);
  }

  render() {
    if (this.props.isAuthenticated) return <Redirect to={ROUTES.DASHBOARD} />;

    return (
      <div className="form-auth">
        {this.props.loading && <Spinner />}
        <BForm onSubmit={this.handleSubmit}>
          {this.renderBrand()}
          {this.renderInput("email", "Email", "text")}
          {this.renderInput("password", "Password", "password")}
          {this.renderForgotPassword(ROUTES.FORGOT_PASSWORD)}
          {this.props.signInError && this.renderError(this.props.signInError)}
          {this.renderSubmitButton("Sign In", true)}
          {false && this.renderOr()}
        </BForm>
        {false && this.renderGoogleButton(this.props.googleLogin)}
        {this.renderBottomLink(
          "Don't have an account?",
          "Register",
          ROUTES.REGISTER
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
    user: state.auth.user,
  };
};

const mapDispatchToProps = {
  login,
  googleLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
