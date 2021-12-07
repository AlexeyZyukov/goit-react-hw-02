import React from 'react';
import styles from './feedback.module.css';

const FeedbackOptions = ({ arrayFromState, onClickFn }) => {
  <div>
    {arrayFromState.map(item => (
      <button type="button" key={item} onClick={onClickFn} className={item}>
        {item}
      </button>
    ))}
  </div>;
};

export default FeedbackOptions;
