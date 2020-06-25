import React from "react";
import { Form } from "react-bootstrap";

const Checkbox = ({ name, label, inlineLabel, ...rest }) => {
  return (
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Check name={name} label={inlineLabel} type="checkbox" {...rest} />
    </Form.Group>
  );
};

export default Checkbox;
