import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import Joi from "@hapi/joi";

import Input from "./Input";
import Select from "./Select";
import RadioGroup from "./RadioGroup";
import FormBrand from "./FormBrand";
import GoogleButton from "./GoogleButton";
import DatePicker from "../../shared/FormComponents/DatePicker/DatePicker";
import "./forms.css";

class Form extends Component {
  state = {
    data: {},
    errors: {},
    pickerShown: false,
  };

  // VALIDATION
  validate = () => {
    const options = { abortEarly: false };
    const { error } = this.schema.validate(this.state.data, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateField = ({ name, value }) => {
    const fieldJoiConfig = this.schema.$_terms.keys.find(
      (item) => item.key === name
    ).schema;
    const schema = Joi.object({ [name]: fieldJoiConfig });
    const { error } = schema.validate({ [name]: value });
    let errorMessage = "";
    if (error) {
      errorMessage =
        name === "birthdate"
          ? "Please provide a valid birthdate"
          : error.details[0].message;
      errorMessage =
        name === "time"
          ? "Please provide a valid time format"
          : error.details[0].message;
    }
    return error ? errorMessage : null;
  };
  // HANDLERS
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateField(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.validateField(input);
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  // Rendering Helpers
  renderInput(name, label, type = "text", placeholder, helperText) {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        placeholder={placeholder}
        onChange={this.handleChange}
        helperText={helperText}
        size="sm"
      />
    );
  }

  renderDateInput(name, label, placeholder, helperText) {
    const { data, errors, pickerShown } = this.state;

    const datePickerChangeHandler = (selectedDate) => {
      const d = { ...data };
      d[name] = selectedDate;
      this.setState({ data: d });
    };

    const currentDate = () => {
      const dateStr = data[name];
      if (!dateStr || dateStr === "") return new Date();
      return new Date(dateStr);
    };
    return (
      <>
        <Input
          type="text"
          name={name}
          label={label}
          value={data[name]}
          error={errors[name]}
          placeholder={placeholder}
          onChange={this.handleChange}
          onFocus={() => this.setState({ pickerShown: true })}
          helperText={helperText}
          size="sm"
          readOnly
        />
        {pickerShown && (
          <DatePicker
            currentDate={currentDate()}
            onChange={datePickerChangeHandler}
            onClose={() => this.setState({ pickerShown: false })}
            showTodayBtn
          />
        )}
      </>
    );
  }
  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        options={options}
        onChange={this.handleChange}
      />
    );
  }

  renderRadioGroup(name, label, options) {
    const { data } = this.state;
    return (
      <RadioGroup
        name={name}
        label={label}
        options={options}
        onChange={this.handleChange}
        value={data[name]}
      />
    );
  }

  renderSubmitButton(label, isBlock, variant = "primary") {
    return (
      <Button
        variant={variant}
        disabled={this.validate()}
        block={isBlock}
        type="submit"
        size="sm"
      >
        {label}
      </Button>
    );
  }

  renderGoogleButton(onClick) {
    return <GoogleButton onClick={onClick} />;
  }

  showAlert(error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  renderBottomLink(text1, text2, path) {
    return (
      <p className="form-bottom-text mt-3">
        {text1}{" "}
        <span>
          <Link to={path} className="form-link">
            {text2}
          </Link>
        </span>
      </p>
    );
  }

  renderBrand(text) {
    return <FormBrand text={text} />;
  }

  renderOr() {
    return (
      <p className="w-100 d-flex justify-content-center my-2 form-label">Or</p>
    );
  }

  renderForgotPassword(path) {
    return (
      <div className="mb-3 d-flex">
        <Link to={path} className="form-link ml-auto">
          Forgot your password?
        </Link>
      </div>
    );
  }

  renderError(errorMessage) {
    return (
      <Alert variant="danger" className="p-1 px-2 text-center">
        {errorMessage}
      </Alert>
    );
  }
}

export default Form;
