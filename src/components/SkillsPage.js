import React, { /*useState*/ } from 'react';
import { useSelector } from 'react-redux';
import SkillBlock from './SkillBlock';
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

export default function SkillsPage() {
  // Map variables to redux store
  const skills = useSelector(state => state.user.skills);
  
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="p-4">Skills</h1>
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