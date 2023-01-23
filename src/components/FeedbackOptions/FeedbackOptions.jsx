import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => {
  return (
    <div>
      <button type="button" onClick={onIncrementGood}>
        Good
      </button>
      <button type="button" onClick={onIncrementNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onIncrementBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
