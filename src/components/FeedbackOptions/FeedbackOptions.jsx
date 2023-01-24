import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ handleIncrement }) => {
  return (
    <div className={css.btnWrapper}>
      <button
        type="button"
        className={[css.btn, css.good].join(' ')}
        onClick={() => handleIncrement('good')}
      >
        Good
      </button>
      <button
        type="button"
        className={[css.btn, css.neutral].join(' ')}
        onClick={() => handleIncrement('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className={[css.btn, css.bad].join(' ')}
        onClick={() => handleIncrement('bad')}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
