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
import '../styles/Home.css'

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
    <Container className="pt-4">
      <Row>
        <Col className="d-flex justify-content-start">
          <span className="welcome">Welcome Username</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
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