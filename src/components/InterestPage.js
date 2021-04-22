import React, { /*useState*/ } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';
import '../styles/Interest.css';

export default function InterestPage(props) {
  const interest = useSelector(state => 
    state.user.interests.find(interest =>
      interest.id.toString() === props.match.params.id));

  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column align-items-start">
          <span className="interestName">{interest.name}</span>
          <span className="interestType">{interest.type}</span>
          <span>{interest.detail}</span>
        </Col>
      </Row>
    </Container>
  );
} 