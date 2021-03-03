import React from "react";
import { useDispatch } from "react-redux";
import { createComplaint } from "../actions/complaintsActions";

const InfoBlock = () => {
  const dispatch = useDispatch();
  const registerHandler = () => {
    dispatch(createComplaint);
  };
  return (
    <div>
      <h1 className="display-4">Need some help?</h1>
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
