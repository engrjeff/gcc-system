import React from "react";
import { Alert } from "react-bootstrap";
import { Wrapper } from "../../shared/Misc/MiscComponents";
import TreeView from "../../shared/TreeView/TreeView";
import gps from "./gps";

const ChurchPage = () => {
  return (
    <Wrapper m="my-3" p="p-3">
      <Alert variant="purple">
        <Alert.Heading>Growth Process System</Alert.Heading>
        <small className="mb-0">
          Note : The download button is not yet functional. -jep
        </small>
      </Alert>
      <TreeView node={gps.nodes} />
    </Wrapper>
  );
};

export default ChurchPage;
