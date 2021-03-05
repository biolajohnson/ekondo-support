import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComplaint } from "../actions/complaintsActions";

const InfoBlock = ({ history }) => {
  const dispatch = useDispatch();
  const { complaint } = useSelector((state) => state.addComplaint);
  const registerHandler = () => {
    dispatch(createComplaint());
    history.push(`/${complaint._id}/form`);
  };

  return (
    <div className="main-content">
      <h1>Need some help?</h1>
      <p>
        Tell us how your plant is doing so far! <br />
        We're excited to introduce a support system where by you can lay down
        any complaint regarding the growth of the precious one. <br />
        Lets know whats up!
      </p>

      <p>
        We will send recommadations and tips via email. Enjoy being a plant
        parent 🙂
      </p>

      <button onClick={registerHandler}>Register a complaint</button>
    </div>
  );
};

export default InfoBlock;
