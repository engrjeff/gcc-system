import React, { useState } from "react";
import CellMemberItem from "./CellMemberItem";
import {
  EmptyPage,
  FloatingButton,
  Modal,
  RegLinkGenerator,
} from "../../shared/Misc/MiscComponents";

const CellMemberList = ({ members, user }) => {
  const [isAddModalShown, setIsAddModalShown] = useState(false);

  return (
    <div className="member-list">
      {members && members.length === 0 ? (
        <EmptyPage textToDisplay="No results found." />
      ) : (
        members && members.map((m) => <CellMemberItem key={m._id} item={m} />)
      )}
      <FloatingButton icon="plus" onClick={() => setIsAddModalShown(true)} />
      {isAddModalShown && (
        <Modal
          shown={isAddModalShown}
          title="Add Member"
          onClose={() => setIsAddModalShown(false)}
          onOk={() => setIsAddModalShown(false)}
        >
          <RegLinkGenerator user={user} />
        </Modal>
      )}
    </div>
  );
};

export default CellMemberList;
