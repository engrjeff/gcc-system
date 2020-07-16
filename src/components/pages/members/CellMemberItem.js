import React, { useState, useEffect } from "react";
import Select from "../../shared/FormComponents/Select";
import {
  IconButton,
  Modal,
  ReactSwitch,
} from "../../shared/Misc/MiscComponents";
import {
  getInitials,
  mapCellStatus,
  mapChurchStatus,
} from "../../../helpers/utils";

import { CELL_STATUS, CHURCH_STATUS } from "../../../constants/appConstants";

const CellMemberItem = ({ item }) => {
  const [isModalShown, setisModalShown] = useState(false);

  const [itemState, setItemState] = useState({
    isPrimaryMember: false,
    cellStatus: "",
    churchStatus: "",
  });

  useEffect(() => {
    if (!item.profile) return;
    const { isPrimaryMember, cellStatus, churchStatus } = item.profile;
    setItemState({
      isPrimaryMember,
      cellStatus,
      churchStatus,
    });
  }, [item]);

  const handlePrimaryChange = () => {
    setItemState({ ...itemState, isPrimaryMember: !itemState.isPrimaryMember });
  };

  const handleStatusChange = ({ currentTarget: input }) => {
    setItemState({ ...itemState, [input.name]: input.value });
  };

  const handleMemberUpdate = () => {
    console.log(itemState);
  }

  return (
    <div className="member-item">
      <div className="member-avatar">{getInitials(item.name)}</div>
      <div className="member-personal-details">
        <h6 className="member-name">{item.name}</h6>
        <small className="member-email">{item.email}</small>
      </div>
      <div className="member-status">
        {!item.profile ? (
          <small className="member-badge member-no-profile">
            No profile yet
          </small>
        ) : (
          <div className="member-status-wrapper">
            <small
              className={`member-badge member-badge-${item.profile.cellStatus}`}
            >
              Cellgroup - {mapCellStatus(item.profile.cellStatus)}
            </small>
            <small
              className={`member-badge member-badge-${item.profile.churchStatus}`}
            >
              {mapChurchStatus(item.profile.churchStatus)}
            </small>
          </div>
        )}
      </div>
      <div className="member-menu">
        <IconButton icon="ellipsis-v" onClick={() => setisModalShown(true)} />
      </div>
      <Modal
        shown={isModalShown}
        onClose={() => setisModalShown(false)}
        title="Member Update"
        oKText="Confirm"
      >
        <div>
          <p className="mb-0">
            Update member <span className="member-name">{item.name}</span>
          </p>
        </div>
        <hr />
        <ReactSwitch
          label="Primary"
          checked={itemState.isPrimaryMember}
          onChange={handlePrimaryChange}
        />
        <Select
          name="cellStatus"
          label="Cell Status"
          options={CELL_STATUS}
          value={itemState.cellStatus}
          onChange={handleStatusChange}
          inline
        />
        <Select
          name="churchStatus"
          label="Church Status"
          options={CHURCH_STATUS}
          value={itemState.churchStatus}
          onChange={handleStatusChange}
          inline
        />
      </Modal>
    </div>
  );
};

export default CellMemberItem;
