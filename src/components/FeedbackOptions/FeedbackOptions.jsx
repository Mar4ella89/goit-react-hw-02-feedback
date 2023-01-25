import React from 'react';
import { nanoid } from 'nanoid';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleIncrement }) => {
  return (
    <div className={css.btnWrapper}>
      {options.map(item => {
        let colorClass = [css.btn, css[item]];
        return (
          <button
            key={nanoid()}
            type="button"
            className={colorClass.join(' ')}
            onClick={() => handleIncrement(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
