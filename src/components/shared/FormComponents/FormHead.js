import React from "react";

const FormHead = ({ formTitle, formSubTitle, children }) => {
  return (
    <div className="form-head">
      {children}
      <div className="form-head-text">
        <h4 className="form-head-title">{formTitle}</h4>
        <small className="form-head-subtitle">{formSubTitle}</small>
      </div>
    </div>
  );
};

export default FormHead;
