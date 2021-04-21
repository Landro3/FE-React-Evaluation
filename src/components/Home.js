import React, { /*useState, */useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../actions/request';
import InterestBlock from './InterestBlock';
import SkillBlock from './SkillBlock';
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

export default function Home() {
  const dispatch = useDispatch();

  // Map variables to redux store
  const interests = useSelector(state => state.user.interests);
  const skills = useSelector(state => state.user.skills);

  // Lifecycle method to get data when home page loads
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  

  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome Username</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Lorem ipsum</p>
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
        {skills.map(skill => 
          <SkillBlock
            key={skill.id}
            id={skill.id}
            name={skill.name}
            type={skill.type}
          />
        )}
      </Row>
    </Container>
  );
} 