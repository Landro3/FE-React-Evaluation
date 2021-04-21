import React, { /*useState*/ } from 'react';
import SkillBlock from './SkillBlock';
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

export default function SkillsPage() {

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
          <h1>Skills</h1>
        </Col>
      </Row>
      <Row>
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