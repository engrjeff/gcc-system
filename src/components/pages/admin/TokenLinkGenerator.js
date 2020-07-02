import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import copy from "copy-to-clipboard";

const TokenLinkGenerator = ({ user }) => {
  const [tokenLink, setTokenLink] = useState("");
  const [showTokenLinkForm, setShowTokenLinkForm] = useState(false);

  const genTokenLink = () => {
    const registrationLink = `${window.location.origin}/register/${user._id}`;
    setTokenLink(registrationLink);
  };

  const copyTokenLinkToClipboard = () => {
    copy(tokenLink);
  };

  return (
    <Row className="app-shadow py-2 bg-white" noGutters>
      {!showTokenLinkForm && (
        <Col className="px-2">
          <Button
            variant="primary"
            size="sm"
            onClick={() => setShowTokenLinkForm((prev) => !prev)}
          >
            Get Registration Link
          </Button>
        </Col>
      )}
      {showTokenLinkForm && (
        <Col className="px-2">
          <Row>
            <Col>
              <Button variant="primary" size="sm" onClick={genTokenLink}>
                Generate Link
              </Button>
            </Col>
            <Col md={7}>
              <Row noGutters className="align-items-center h-100">
                <Col md={11}>
                  <pre
                    className="mb-0 text-primary bg-off-white px-2"
                    style={{
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {tokenLink ? tokenLink : "No registration link yet."}
                  </pre>
                </Col>
                <Col md={1}>
                  {tokenLink && (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={copyTokenLinkToClipboard}
                    >
                      <span className="fas fa-clipboard"></span>
                    </Button>
                    // <span
                    //   className="fas fa-clipboard app-clipboard-btn mr-2 py-2 bg-primary-light text-white"
                    //   onClick={copyTokenLinkToClipboard}
                    //   title="copy"
                    // ></span>
                  )}
                </Col>
              </Row>
            </Col>
            <Col className="ml-auto">
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  setShowTokenLinkForm((prev) => !prev);
                  setTokenLink("");
                }}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </Col>
      )}
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(TokenLinkGenerator);
