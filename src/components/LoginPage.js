import React, { /*useState*/ } from 'react';
import {
  Container,
  Col,
  Row,
  Form,
  Button
} from 'react-bootstrap';

export default function LoginPage() {

  return (
    <Container>
      <Row>
        <Col>
          No Inc
        </Col>
        <Col>
          <h3>Login to Our Magic Portal</h3>
          <Form>
            <Form.Group controlId="username">
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>
            <Button type="submit">LOGIN</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}