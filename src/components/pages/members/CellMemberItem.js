import React from "react";
import {
  getInitials,
  mapCellStatus,
  mapChurchStatus,
} from "../../../helpers/utils";
import { IconButton } from "../../shared/Misc/MiscComponents";

const CellMemberItem = ({ item }) => {
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
        <IconButton icon="ellipsis-v" />
      </div>
    </div>
  );
};

export default CellMemberItem;
