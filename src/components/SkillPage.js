import React, { /*useState*/ } from 'react';
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

export default function SkillPage(props) {

  return (
    <Container>
      <Row>
        <Col>
          <h1>Skill Name</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Skill Type</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          Skill Details
        </Col>
      </Row>
    </Container>
  );
} 