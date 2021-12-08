/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Component } from 'react';

import styles from './feedback.module.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class Feedback extends Component {
  static PropsTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  onBtnClick = event => {
    this.setState(prevState => {
      return {
        [event.target.textContent]: prevState[event.target.textContent] + 1,
      };
    });
    console.log(
      `${event.target.textContent}`,
      this.state[event.target.textContent],
    );
  };

  countTotalFeedback = () => {
    console.log('Object.values(this.state): ', Object.values(this.state));
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const arrayState = Object.keys(this.state);
    console.log('arrayState: ', arrayState);
    const actualState = this.state;
    console.log(actualState);
    // const total = this.countTotalFeedback();

    return (
      <Fragment>
        <div className={styles.wrapper}>
          {this.props.title && <h2>{this.props.title}</h2>}

          <FeedbackOptions
            arrayFromState={arrayState}
            onClickFn={this.onBtnClick}
          />

          <Statistics
            totalFeedback={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
            arrayFromState={arrayState}
            actualState={this.state}
          />
        </div>
      </Fragment>
    );
  }
}

export default Feedback;

// eslint-disable-next-line no-lone-blocks
{
  /* {total !== 0 ? (
          <Fragment>
            <ul>
              {arrayState.map(item => (
                <Fragment key={item}>
                  <li className={styles.statsItem}>
                    <span className={styles.statsKind}>{item}: </span>
                    <span className={styles.statsValue}>{this.state[item]}</span>
                  </li>
                </Fragment>
              ))}
              <ul>
                <li>
                  <span>Total: </span>
                  <span>{total}</span>
                </li>
                <li>
                  <span>Positive feedback: </span>
                  <span>
                    {this.countPositiveFeedbackPercentage()}
                    <span> %</span>
                  </span>
                </li>
              </ul>
            </ul>
          </Fragment>
        ) : (
          `There is no feedback`
        )} */
}
