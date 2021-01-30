import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const FormScreen = () => {
  const theName = "Abiola",
    email = "biola@email.com",
    text = "no wahala";
  return (
    <>
      <Row>
        <Col xs={4} md={6}>
          <h1 className="display-4">Need some help?</h1>
          <p>
            Tell us how your plant is doing so far! <br />
            We're excited to introduce a support system where by you can lay
            down any complaint regarding the growth of the precious one. <br />
            Lets know whats up!
          </p>

          <p>
            We will send recommadations and tips via email. Enjoy being a plant
            parent 🙂
          </p>
        </Col>
        <Col xs={6} md={6}>
          <FormContainer>
            <h1>What's Up</h1>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="name"
                  value={theName}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=" Email Address"
                  value={email}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Dry soil" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Holes in soil" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Yellow leaves" />
              </Form.Group>
              <Form.Group controlId="text">
                <Form.Label>Complaint</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="What happened?"
                  value={text}
                ></Form.Control>
              </Form.Group>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Form>
          </FormContainer>
        </Col>
      </Row>
    </>
  );
};

export default FormScreen;
