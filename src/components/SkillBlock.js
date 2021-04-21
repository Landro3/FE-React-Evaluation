import React, { /*useState*/ } from 'react';
import { Link } from 'react-router-dom';
import {
  Col
} from 'react-bootstrap';

export default function SkillBlock(props) {

  return (
    <Col>
      <Link to={`/Skills/${props.id}`}>
        <button>
          Skill {props.id}
          <div>
            <span>Name: </span>
            <span>{props.name}</span>
          </div>
          <div>
            <span>Type: </span>
            <span>{props.type}</span>
          </div>
        </button>  
      </Link>    
    </Col>
  );
} 