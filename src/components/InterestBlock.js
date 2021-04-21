import React, { /*useState*/ } from 'react';
import { Link } from 'react-router-dom';
import {
  Col
} from 'react-bootstrap';

export default function InterestBlock(props) {

  return (
    <Col>
      <Link to={`/Interests/${props.id}`}>
        <button>
          Interest {props.id}
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