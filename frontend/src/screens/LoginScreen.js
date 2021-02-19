import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";

const LoginScreen = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.registerUser);
  const { userInfo } = user;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userInfo) {
      history.push(`/info`);
      console.log(userInfo);
    }
  }, [userInfo, history]);

  const registerUserHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password));
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={registerUserHandler}>
        <Form.Group controlId="email">
          <Form.Label> Name </Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label> Email Address </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label> Password </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Sign Up
        </Button>
        <p>
          Already have an account with us ? <Link to={`/`}>Click here</Link>
        </p>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;
