import React, { /*useState*/ } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';
import moment from 'moment';
import '../styles/Skill.css';

export default function SkillPage(props) {
  const skillColors = useSelector(state => state.user.skillColors);
  const skill = useSelector(state => 
    state.user.skills.find(skill =>
      skill.id.toString() === props.match.params.id));

  // Used only to apply background color
  const typeStyle = { 
    backgroundColor: skillColors[skill.type],
  };

  return (
    <Container>
      <Row>
      <Col className="d-flex flex-column align-items-start">
          <span className="skillName">{skill.name}</span>
          {skill.DateLearned ? 
            <i>Date Learned: {moment(skill.DateLearned).format('M/D/YYYY')}</i> 
            : null
          }
          <span style={typeStyle} className="skillType">{skill.type}</span>
          <span>{skill.detail}</span>
        </Col>
      </Row>
    </Container>
  );
} 