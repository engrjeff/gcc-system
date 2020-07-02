import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import RadioGroup from "../../shared/FormComponents/RadioGroup";
import { Modal } from "../../shared/Misc/MiscComponents";
import { USER_ROLES } from "../../../constants/appConstants";

const ModalRoleChange = ({
  show,
  onClose,
  onOk,
  onRoleChange,
  selectedUser,
  currentRole,
}) => {
  return (
    <Modal shown={show} onClose={onClose} onOk={onOk} title="Change Role">
      <Row>
        <Col>
          <p className="form-label mb-0">
            Select a role for{" "}
            <span className="font-weight-bold">{selectedUser.name}</span>
          </p>
        </Col>
        <Col>
          <p className="form-label mb-0">
            Current:{" "}
            <Badge variant={selectedUser.role}>{selectedUser.role}</Badge>
          </p>
        </Col>
      </Row>
      <hr />
      <RadioGroup
        options={USER_ROLES}
        onChange={onRoleChange}
        name="role"
        label="Select Role"
        value={currentRole}
        stacked={true}
      />
    </Modal>
  );
};

export default ModalRoleChange;
