import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { createComplaint } from "../actions/complaintsActions.js";
import axios from "axios";

const FormScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [drySoil, setDrySoil] = useState(false);
  const [yellowLeaves, setYellowLeaves] = useState(false);
  const [holesInLeaves, setHolesInLeaves] = useState(false);
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  //get the complaint to create with one button!!!! thats the only way!!!

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    try {
      await axios.post("/api/upload", formData, config);
      setUploading(false);
    } catch {
      console.error(e);
      setUploading(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createComplaint({
        name,
        email,
        text,
        drySoil,
        yellowLeaves,
        holesInLeaves,
        image,
      })
    );
  };

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
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=" Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Dry soil"
                  value={drySoil}
                  onChange={(e) => setDrySoil(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Holes in soil"
                  value={yellowLeaves}
                  onChange={(e) => setHolesInLeaves(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Yellow leaves"
                  value={holesInLeaves}
                  onChange={(e) => setYellowLeaves(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="text">
                <Form.Label>Complaint</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="What happened?"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></Form.Control>
                <Form.Group controlId="image">
                  <Form.Label>Image</Form.Label>
                  <Form.File
                    id="image-file"
                    label="Choose file"
                    custom
                    onChange={uploadFileHandler}
                  ></Form.File>
                </Form.Group>
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
