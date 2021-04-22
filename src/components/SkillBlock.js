import React, { /*useState*/ } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Col
} from 'react-bootstrap';
import '../styles/Block.css';

export default function SkillBlock(props) {
  const history = useHistory()
  const handleClick = () => history.push(`/Skills/${props.id}`);

  return (
    <Col className="d-flex justify-content-center p-3">
      <button className="blockButton" onClick={handleClick}>
        <span className="blockTitle">Skill {props.id}</span>
        <div className="d-flex">
          <p className="name">Name: </p>
          <span>{props.name}</span>
        </div>
        <div className="d-flex">
          <p className="type">Type: </p>
          <span>{props.type}</span>
        </div>
      </button>    
    </Col>
  );
} 