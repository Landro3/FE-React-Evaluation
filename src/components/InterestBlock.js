import React, { /*useState*/ } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Col
} from 'react-bootstrap';
import '../styles/Block.css';

export default function InterestBlock(props) {
  const history = useHistory()
  const handleClick = () => history.push(`/Interests/${props.id}`);

  return (
    <Col className="p-4">
      <button onClick={handleClick}>
        <span className="blockTitle">Interest {props.id}</span>
        <div className="d-flex">
          <p className="name">Name:</p>
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