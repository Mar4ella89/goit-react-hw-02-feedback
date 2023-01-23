import React from 'react';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, voits, percent }) => {
  return (
    <ul>
      <li>
        <span>Good:</span>
        <span>{good}</span>
      </li>
      <li>
        <span>Neutral:</span>
        <span>{neutral}</span>
      </li>
      <li>
        <span>Bad:</span>
        <span>{bad}</span>
      </li>
      <li>
        <span>Total:</span>
        <span>{voits}</span>
      </li>
      <li>
        <span>Positive feedback:</span>
        <span>{percent}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  voits: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Statistics;
