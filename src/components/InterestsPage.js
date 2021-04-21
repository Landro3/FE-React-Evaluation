import React, { /*useState*/ } from 'react';
import { useSelector } from 'react-redux';
import InterestBlock from './InterestBlock';
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

export default function InterestsPage() {
  // Map variables to redux store
  const interests = useSelector(state => state.user.interests);

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