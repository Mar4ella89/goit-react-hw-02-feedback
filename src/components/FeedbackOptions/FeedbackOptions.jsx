import React from 'react';
// import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => {
  return (
    <div className={css.btnWrapper}>
      <button type="button" className={[css.btn, css.good].join(' ')} onClick={onIncrementGood}>
        Good
      </button>
      <button type="button" className={[css.btn, css.neutral].join(' ')} onClick={onIncrementNeutral}>
        Neutral
      </button>
      <button type="button" className={[css.btn, css.bad].join(' ')} onClick={onIncrementBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
