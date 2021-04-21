import React, { /*useState*/ } from 'react';
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

export default function InterestPage(props) {

  return (
    <Container>
      <Row>
        <Col>
          <h1>Interest Name</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Interest Type</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          Interest Details
        </Col>
      </Row>
    </Container>
  );
} 