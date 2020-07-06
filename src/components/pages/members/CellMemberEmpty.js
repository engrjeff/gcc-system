import React from "react";
import { Wrapper, EmptyPage } from "../../shared/Misc/MiscComponents";

const CellMemberEmpty = () => {
  return (
    <Wrapper m="my-3" p="p-3">
      <EmptyPage textToDisplay="You don't have any members to display. Send a registration link now to your members." />
    </Wrapper>
  );
};

export default CellMemberEmpty;
