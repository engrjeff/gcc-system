import React from "react";
import CellMemberItem from "./CellMemberItem";
import { EmptyPage } from "../../shared/Misc/MiscComponents";

const CellMemberList = ({ members }) => {
  return (
    <div className="member-list">
      {members && members.length === 0 ? (
        <EmptyPage textToDisplay="No results found." />
      ) : (
        members && members.map((m) => <CellMemberItem key={m._id} item={m} />)
      )}
    </div>
  );
};

export default CellMemberList;
