import React, { /*useState*/ } from 'react';
import InterestBlock from './InterestBlock';
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

export default function InterestsPage() {
  let interests = [
    {
      id: 1,
      name: 'Interest 1',
      type: 'Type 1'
    },
    {
      id: 2,
      name: 'Interest 2',
      type: 'Type 2'
    }
  ];


  return (
    <Container>
      <Row>
        <Col>
          <h1>Interests</h1>
        </Col>
      </Row>
      <Row>
        {interests.map(interest => 
          <InterestBlock 
            key={interest.id}
            id={interest.id}
            name={interest.name}
            type={interest.type} 
          />
        )}
      </Row>
    </Container>
  );
} 