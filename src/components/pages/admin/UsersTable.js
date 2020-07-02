import React, { Fragment, useState } from "react";
import Table from "../../shared/Table/Table";
import { Badge } from "react-bootstrap";
import { IconButton } from "../../shared/Misc/MiscComponents";
import ModalRoleChange from "./ModalRoleChange";
import ModalPasswordConfirm from "./ModalPasswordConfirm";

const UsersTable = ({ currentUser, users, error, doUpdateUserRole }) => {
  const UserColumns = [
    {
      key: "name",
      label: "Name",
      content: (item) =>
        item._id === currentUser._id ? (
          <Fragment>
            {item.name} <Badge variant="success">Me</Badge>
          </Fragment>
        ) : (
          item.name
        ),
    },
    { path: "email", label: "Email" },
    {
      key: "role",
      label: "Role",
      content: (item) => <Badge variant={item.role}>{item.role}</Badge>,
    },
    {
      key: "change-role",
      label: "Action",
      disabled: (item) => item._id === currentUser._id,
      content: (item) => renderActionCell(item),
    },
  ];

  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const renderActionCell = (item) => {
    return (
      <div className="d-flex align-items-center">
        <IconButton icon="pen" onClick={() => onActionClick(item, "role")} />
        <IconButton
          icon="trash"
          onClick={() => onActionClick(item, "delete")}
        />
      </div>
    );
  };

  const onActionClick = (item, action) => {
    const user = { ...item };
    setSelectedUser(user);
    if (action === "role") {
      setRole(user.role);
      setShowRoleModal(true);
    } else if (action === "delete") {
      setShowPasswordModal(true);
    }
  };

  const handleRoleChange = ({ currentTarget: input }) => {
    setRole(input.value);
  };

  const handlePasswordChange = ({ currentTarget: input }) => {
    setPassword(input.value);
  };

  const closeModal = () => {
    setShowRoleModal(false);
    setShowPasswordModal(false);
    setRole("");
    setPassword("");
  };

  const onRoleModalOkClick = () => {
    setShowRoleModal(false);
    setShowPasswordModal(true);
  };

  const onPasswordModalOkClick = () => {
    const callbackFunc = () => {
      closeModal();
    };
    doUpdateUserRole(password, role, selectedUser._id, callbackFunc);
  };

  return (
    <Fragment>
      <ModalRoleChange
        show={showRoleModal}
        selectedUser={selectedUser}
        currentRole={role}
        onRoleChange={handleRoleChange}
        onClose={closeModal}
        onOk={onRoleModalOkClick}
      />
      <ModalPasswordConfirm
        show={showPasswordModal}
        password={password}
        onPasswordChange={handlePasswordChange}
        onClose={closeModal}
        onOk={onPasswordModalOkClick}
        error={error}
      />
      <Table columns={UserColumns} data={users} />
    </Fragment>
  );
};

export default UsersTable;
