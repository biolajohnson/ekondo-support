import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";

const HomeScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>Experience Ekondo</h1>
          <FormContainer>
            <h1>Sign In</h1>
            <Form>
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
                Sign in
              </Button>
            </Form>
          </FormContainer>
        </div>
      </div>
    </section>
  );
};
export default HomeScreen;
