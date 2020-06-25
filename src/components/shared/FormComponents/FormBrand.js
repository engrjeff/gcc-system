import React from "react";
import logo from "../../../assets/logo.png";

const FormBrand = ({ text = "Sign In" }) => {
  return (
    <div className="form-brand">
      <div className="form-brand-logo-container">
        <img src={logo} alt="logo" className="form-brand-avatar" />
      </div>
      <div className="form-brand-text">
        <h5 className="mb-0 mt-2 form-brand-headertext">{text}</h5>
      </div>
    </div>
  );
};

export default FormBrand;
