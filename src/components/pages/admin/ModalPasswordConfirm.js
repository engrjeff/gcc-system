import React from "react";
import PasswordField from "../../shared/FormComponents/PasswordField";
import { Modal } from "../../shared/Misc/MiscComponents";

const ModalPasswordConfirm = ({
  show,
  onClose,
  onOk,
  password,
  error,
  onPasswordChange,
}) => {
  return (
    <Modal
      shown={show}
      onClose={onClose}
      onOk={onOk}
      title="Pasword Confirmation"
      disabledOkIn={password === ""}
      error={error}
    >
      <PasswordField
        name="password"
        label="Confirm your password to continue"
        value={password}
        onChange={onPasswordChange}
      />
    </Modal>
  );
};

export default ModalPasswordConfirm;
