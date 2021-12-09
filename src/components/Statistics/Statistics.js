import React from 'react';
import { Fragment } from 'react';
import Notification from '../Notification/notification';
import styles from '../feedback.module.css';

const uppCase = string => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

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
          <div className={styles.statistics}>
            {arrayFromStateEntry.map(item => (
              <Fragment key={item[0]}>
                <tbody className={styles.table}>
                  <tr className={styles.row}>
                    <td>{uppCase(item[0])}: </td>
                    <td>{item[1]}</td>
                  </tr>
                </tbody>
              </Fragment>
            ))}
            <tbody className={styles.table}>
              <tr>
                <td>Total: </td>
                <td>{totalFeedback}</td>
              </tr>
              <tr>
                <td>Positive feedback: </td>
                <td>{positiveFeedback} %</td>
              </tr>
            </tbody>
          </div>
        </Fragment>
      ) : (
        <Notification message={message} />
      )}
    </div>
  );
};
export default Statistics;

// eslint-disable-next-line no-lone-blocks
{
  /* <li className={styles.statsItem}>
                  <span className={styles.statsKind}>{item[0]}: </span>
                  <span className={styles.statsValue}>{item[1]}</span>
                </li> */
}
// eslint-disable-next-line no-lone-blocks
{
  /* <ul>
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
            </ul> */
}
