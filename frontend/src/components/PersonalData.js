import React from "react";
import { logout } from "../actions/userActions";
import { useDispatch } from "react-redux";

const PersonalData = ({ name, history }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <div className="personal-info">
      <p>{`Hello ${name}. Nice to have you on board! `}</p>
      <button onClick={logoutHandler}>Log out</button>
    </div>
  );
};

export default PersonalData;
