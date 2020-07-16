import React from "react";
import "./modal.css";

const Modal = ({
  title,
  shown,
  hasFooter,
  onClose,
  onOk,
  oKText,
  children,
  disabledOkIn,
  error,
}) => {
  return (
    <div className={`app-modal-container ${shown ? "" : "hide"}`}>
      <div className="app-modal">
        <div className="app-modal-header">
          <h6 className="app-modal-title">{title}</h6>
          <div className="app-modal-closebtn" onClick={onClose}>
            <span>&times;</span>
          </div>
        </div>
        <div className="app-modal-body">{children}</div>
        {error && <div className="app-modal-error">{error}</div>}
        {hasFooter && (
          <div className="app-modal-footer">
            <div className="app-modal-buttons">
              <button
                className={`btn btn-outline-primary btn-sm modal-btn`}
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className={`btn btn-primary btn-sm modal-btn`}
                onClick={onOk}
                disabled={disabledOkIn}
              >
                {oKText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  shown: false,
  hasFooter: true,
  oKText: "Ok",
  disabledOkIn: false,
};

export default Modal;
