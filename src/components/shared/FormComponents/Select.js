import React from "react";
import { Form } from "react-bootstrap";

const Select = ({ name, label, options, onChange, value, error }) => {
  return (
    <Form.Group className="form-group">
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        as="select"
        name={name}
        size="sm"
        onChange={onChange}
        value={value}
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
