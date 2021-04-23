import React, { /*useState*/ } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Col
} from 'react-bootstrap';
import '../styles/Block.css';

export default function InterestBlock(props) {
  const interestColors = useSelector(state => state.user.interestColors);
  const history = useHistory()
  const handleClick = () => history.push(`/Interests/${props.id}`);

  const typeStyle = { 
    color: 'white', 
    backgroundColor: interestColors[props.type],
    padding: '0.25rem 0.5rem',
  };

  return (
    <Col className="d-flex justify-content-center p-3">
      <button className="blockButton" onClick={handleClick}>
        <span className="blockTitle">Interest {props.id}</span>
        <div className="d-flex">
          <p className="name">Name:</p>
          <span>{props.name}</span>
        </div>
        <div className="d-flex">
          <p className="type">Type: </p>
          <span style={typeStyle}>{props.type}</span>
        </div>
      </button>    
    </Col>
  );
} 