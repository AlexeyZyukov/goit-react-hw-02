import React from 'react';
import styles from '../feedback.module.css';

const FeedbackOptions = ({ arrayFromState, onClickFn }) => (
  <div>
    {arrayFromState.map(item => (
      <button type="button" className={item} key={item} onClick={onClickFn}>
        {item}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
