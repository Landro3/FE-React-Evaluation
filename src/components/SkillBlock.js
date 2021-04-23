import React, { /*useState*/ } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Col
} from 'react-bootstrap';
import '../styles/Block.css';

export default function SkillBlock(props) {
  const skillColors = useSelector(state => state.user.skillColors);
  const history = useHistory()
  const handleClick = () => history.push(`/Skills/${props.skill.id}`);

  const typeStyle = { 
    color: 'white', 
    backgroundColor: skillColors[props.skill.type],
    padding: '0.25rem 0.5rem',
  };

  return (
    <Col className="d-flex justify-content-center p-3">
      <button className="blockButton" onClick={handleClick}>
        <span className="blockTitle">Skill {props.skill.id}</span>
        <div className="d-flex">
          <p className="name">Name: </p>
          <span>{props.skill.name}</span>
        </div>
        <div className="d-flex">
          <p className="type">Type: </p>
          <span style={typeStyle}>{props.skill.type}</span>
        </div>
      </button>    
    </Col>
  );
} 