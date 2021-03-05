import React from "react";

const PersonalData = ({ name }) => {
  return (
    <div className="personal-info">
      <p>{`Hello ${name}. Nice to have you on board! `}</p>
    </div>
  );
};

export default PersonalData;
