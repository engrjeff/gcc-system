import React from "react";
import Switch from "react-switch";

const ReactSwitch = ({ label, onChange, checked }) => {
  return (
    <div className="react-switch-wrapper">
      <label className="form-label">{label}</label>
      <Switch
        onChange={onChange}
        checked={checked}
        onColor="#446a96"
        onHandleColor="#0a2749"
        handleDiameter={22}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.4)"
        activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
        height={16}
        width={40}
        className="react-switch"
        id="material-switch"
      />
    </div>
  );
};

export default ReactSwitch;
