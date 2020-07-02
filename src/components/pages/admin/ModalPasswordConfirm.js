import React from "react";
import Input from "../../shared/FormComponents/Input";
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
      <Input
        name="password"
        type="password"
        label="Confirm your password to continue"
        value={password}
        onChange={onPasswordChange}
      />
    </Modal>
  );
};

export default ModalPasswordConfirm;
