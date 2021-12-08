import React from 'react';
import { Fragment } from 'react';
import Notification from '../Notification/notification';
import styles from '../feedback.module.css';

const Statistics = ({
  totalFeedback,
  positiveFeedback,
  arrayFromStateEntry,
  message,
}) => {
  return (
    <div>
      {totalFeedback !== 0 ? (
        <Fragment>
          <ul>
            {arrayFromStateEntry.map(item => (
              <Fragment key={item[0]}>
                <li className={styles.statsItem}>
                  <span className={styles.statsKind}>{item[0]}: </span>
                  <span className={styles.statsValue}>{item[1]}</span>
                </li>
              </Fragment>
            ))}
            <ul>
              <li>
                <span>Total: </span>
                <span>{totalFeedback}</span>
              </li>
              <li>
                <span>Positive feedback: </span>
                <span>
                  {positiveFeedback}
                  <span> %</span>
                </span>
              </li>
            </ul>
          </ul>
        </Fragment>
      ) : (
        <Notification message={message} />
      )}
    </div>
  );
};
export default Statistics;
