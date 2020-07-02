import React from "react";
import { Form } from "react-bootstrap";

const RadioGroup = ({
  name,
  label,
  options,
  value,
  onChange,
  stacked = false,
}) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <div
        className={`form-radio-group ${
          stacked ? "" : "d-flex align-items-center"
        }`}
      >
        {options &&
          options.map((item) => (
            <div
              className="form-radio-row d-flex align-items-center mr-3"
              key={item.id}
            >
              <Form.Check
                type="radio"
                name={name}
                value={item.value}
                id={item.value}
                onChange={onChange}
                className="form-control-input"
                checked={item.value === value}
              />
              <Form.Label htmlFor={item.value} className="mb-0">
                {item.label}
              </Form.Label>
            </div>
          ))}
      </div>
    </Form.Group>
  );
};

export default RadioGroup;
