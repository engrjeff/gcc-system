import React from "react";
import { Form } from "react-bootstrap";

const Input = ({
  name,
  label,
  placeholder,
  error,
  helperText = "",
  ...rest
}) => {
  return (
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        id={name}
        placeholder={placeholder || `Enter your ${name}`}
        name={name}
        {...rest}
      />
      {helperText && <Form.Text className="text-muted">{helperText}</Form.Text>}
      {error && <Form.Text className="text-danger">{error}</Form.Text>}
    </Form.Group>
  );
};

export default Input;
