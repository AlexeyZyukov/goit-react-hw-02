/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Component } from 'react';

import styles from './feedback.module.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class Feedback extends Component {
  // static defaultProps = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

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
    // const { good, neutral, bad } = this.state;
    // return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  // arrayState = Object.keys(this.state);

  render() {
    const arrayState = Object.keys(this.state);
    const total = this.countTotalFeedback();
    console.log('arrayState: ', arrayState);

    return (
      <Fragment>
        {this.props.title && <h2>{this.props.title}</h2>}

        <FeedbackOptions
          arrayFromState={arrayState}
          onClickFn={this.onBtnClick}
        />

        {/* <div>
            {Object.keys(this.state).map(item => (
              <button type="button" key={item}
                onClick={this.onBtnClick} className={item}>
                {item}
              </button>
            ))}
        </div> */}

        {/* <Statistics
          totalFeedback={this.countTotalFeedback()}
          positiveFeedback={this.countPositiveFeedbackPercentage}
          arrayFrmState={this.arrayState}
        /> */}

        {total !== 0 ? (
          <Fragment>
            <ul>
              {arrayState.map(item => (
                <Fragment key={item}>
                  <li className={styles.statsItem}>
                    <span className={styles.statsKind}>{item}: </span>
                    <span className={styles.statsValue}>{[item]}</span>
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
        )}
      </Fragment>
    );
  }
}

export default Feedback;
