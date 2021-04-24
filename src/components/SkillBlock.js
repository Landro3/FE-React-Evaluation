import React, { /*useState*/ } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Col,
  Tooltip,
  OverlayTrigger
} from 'react-bootstrap';
import moment from 'moment';
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
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 250 }}
          overlay={ 
            <Tooltip>
              {props.skill.DateLearned ? 
                <span>Date Learned: {moment(props.skill.DateLearned).format('M/D/YYYY')}</span> 
                : null
              }
            </Tooltip>
          }
        >
          <span className="blockTitle">Skill {props.skill.id}</span>
        </OverlayTrigger>
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