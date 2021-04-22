import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '../actions/user';
import {
  Container,
  Col,
  Row,
  Form,
  Button
} from 'react-bootstrap';
import brandLogo from '../images/NOINC_Logo.svg';
import '../styles/Login.css';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      dispatch(setUsername(form.username.value));
    }

    setValidated(true);
  }

  return (
    <Container style={{ height: "75vh" }} className="d-flex align-items-center justify-content-center">
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <div className="loginBox">
            <div className="loginLeft">
              <img src={brandLogo} alt="No Inc. Logo" />
            </div>
            <div className="loginRight">
              <span>Login to Our Magic Portal</span>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                  <Form.Control required type="text" placeholder="Username" />
                  <Form.Control.Feedback type="invalid">Please enter a username.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Control required type="text" placeholder="Password" />
                  <Form.Control.Feedback type="invalid">Please enter a password.</Form.Control.Feedback>
                </Form.Group>
                <Button className="w-100" type="submit">LOGIN</Button>
            </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}