import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { createComplaint } from "../actions/complaintsActions";

const InfoScreen = ({ history }) => {
  const dispatch = useDispatch();
  const complaintState = useSelector((state) => state.addComplaint);

  const { id } = complaintState;

  useEffect(() => {
    if (id) {
      history.push(`/support/${id}`);
    }
  }, [id, history]);

  const registerHandler = () => {
    dispatch(createComplaint());
    return <Redirect to={`/${id}/form`} />;
  };
  return (
    <>
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

      <Button onClick={registerHandler}>Register a complaint</Button>
    </>
  );
};

export default InfoScreen;
