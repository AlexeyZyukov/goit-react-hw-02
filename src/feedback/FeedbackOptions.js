import React from 'react';
import styles from './feedback.module.css';

const FeedbackOptions = ({ arrayFrmState, onClick }) => {
  <div>
    {arrayFrmState.map(item => (
      <button type="button" key={item} onClick={onClick} className={item}>
        {item}
      </button>
    ))}
  </div>;
};

export default FeedbackOptions;
