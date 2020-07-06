import React, { useState } from "react";
import { Form } from "react-bootstrap";

const PasswordField = ({
  name,
  label,
  placeholder,
  error,
  helperText = "",
  size,
  value,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <div className="password-field">
        <Form.Control
          id={name}
          type={showPassword ? "text" : "password"}
          size={size}
          placeholder={placeholder || `Enter your ${name}`}
          name={name}
          value={value}
          {...rest}
        />
        {value !== "" && (
          <div className="password-field-icon" onClick={toggleShowPassword}>
            <span
              className={!showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
            />
          </div>
        )}
      </div>
      {helperText && <Form.Text className="text-muted">{helperText}</Form.Text>}
      {error && <Form.Text className="text-danger">{error}</Form.Text>}
    </Form.Group>
  );
};

export default PasswordField;
