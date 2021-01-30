import React from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const LoginScreen = () => {
  const email = "abiola",
    password = "abiola";

  return (
    <FormContainer>
      <h1>Admin Sign In</h1>
      <Form>
        <Form.Group controlId="email">
          <Form.Label> Email Address </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label> Password </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Log in to do admin stuff
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Not admin? <Link to={`/support`}>Here</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
