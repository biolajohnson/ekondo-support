import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div className="spinner_container">
      <img className="spinner_image" src={spinner} alt="loading..." />
    </div>
  );
};

export default Spinner;
