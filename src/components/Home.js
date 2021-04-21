import React, { /*useState*/ } from 'react';
import InterestBlock from './InterestBlock';
import SkillBlock from './SkillBlock';
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

export default function Home() {
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

  let skills = [
    {
      id: 1,
      name: 'Skill 1',
      type: 'Type 1'
    },
    {
      id: 2,
      name: 'Skill 2',
      type: 'Type 2'
    }
  ];

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