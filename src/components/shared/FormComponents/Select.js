import React from "react";
import { Form } from "react-bootstrap";

const Select = ({
  name,
  label,
  options,
  onChange,
  value,
  error,
  size,
  as,
  inline,
}) => {
  return (
    <Form.Group
      className={
        inline ? "form-group d-flex align-items-center mb-1" : "form-group"
      }
      as={as}
    >
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        as="select"
        name={name}
        size={size}
        onChange={onChange}
        value={value}
        className={inline ? "w-75 ml-auto" : ""}
      >
        <option key="*" value="" disabled>
          *
        </option>
        {options &&
          options.map((item) => (
            <option key={item.id} value={item.value}>
              {item.label}
            </option>
          ))}
      </Form.Control>
      {error && <Form.Text className="text-danger">{error}</Form.Text>}
    </Form.Group>
  );
};

export default Select;
