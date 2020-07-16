import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getCurrentUserCellMembers } from "../../../state/actions/cellMemberActions";

import CellMemberEmpty from "./CellMemberEmpty";
import CellMemberPageBody from "./CellMemberPageBody";

const CellMemberPage = (props) => {
  const { getCurrentUserCellMembers, members, user } = props;

  useEffect(() => {
    getCurrentUserCellMembers({ sortBy: "name" });
  }, [getCurrentUserCellMembers]);

  return (
    <Fragment>
      {members.length === 0 ? (
        <CellMemberEmpty />
      ) : (
        <CellMemberPageBody members={members.data} user={user} />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    members: state.member.userMembers,
    user: state.auth.user,
  };
};

const mapDispatchToProps = {
  getCurrentUserCellMembers,
};

export default connect(mapStateToProps, mapDispatchToProps)(CellMemberPage);
