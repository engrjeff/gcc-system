import React, { useState } from "react";
import copy from "copy-to-clipboard";
import { Button } from "react-bootstrap";
import { IconButton } from "../MiscComponents";
import "./reglinkgenerator.css";

const RegLinkGenerator = ({ user }) => {
  const [isHelpShown, setIsHelpShown] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [regLink, setRegLink] = useState("");

  const handleCopy = () => {
    copy(regLink);
    setIsCopied(true);
  };

  const generateRegLink = () => {
    const registrationLink = `${window.location.origin}/register/${user._id}`;
    setRegLink(registrationLink);
  };

  return (
    <div className="reg-link-container">
      <div className="reg-link-row">
        <Button size="sm" onClick={generateRegLink}>
          Generate Registration Link
        </Button>
        <IconButton icon="question" onClick={() => setIsHelpShown((p) => !p)} />
      </div>
      {isHelpShown && (
        <div className="reg-link-row">
          <small className="reg-link-help">
            Generate a registration link, <strong>copy</strong> it then send it
            to your members.
          </small>
        </div>
      )}
      <div className="reg-link-row">
        <pre className="reg-link-url">
          {regLink || "No registration link yet"}
        </pre>
      </div>
      <div className="reg-link-row">
        {isCopied && <small>Link copied!</small>}
        <Button
          size="sm"
          className="copy-btn"
          onClick={handleCopy}
          disabled={regLink === ""}
        >
          <span className="fas fa-copy"></span>
        </Button>
      </div>
    </div>
  );
};

export default RegLinkGenerator;
