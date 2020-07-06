import React from "react";

const ProfileIconBar = ({ icon, text }) => {
  return (
    <div className="profile-icon-bar">
      <span className={`fas fa-${icon} mr-2`}></span>
      <p className="mb-0">{text}</p>
    </div>
  );
};

export default ProfileIconBar;
