/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Component } from 'react';

import styles from './feedback.module.css';
import FeedbackOptions from './FeedbackOptions';

class Feedback extends Component {
  // static defaultProps = {
  //   Good: 0,
  //   Neutral: 0,
  //   Bad: 0,
  // };

  constructor(props) {
    super(props);
    this.state = {
      Good: 0,
      Neutral: 0,
      Bad: 0,
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
    const { Good, Neutral, Bad } = this.state;
    return Good + Neutral + Bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { Good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((Good / total) * 100) : 0;
  };

  arrayState = Object.keys(this.state);

  render() {
    const total = this.countTotalFeedback();
    const arrFrmState = Object.keys(this.state);
    console.log(arrFrmState);

    return (
      <Fragment>
        {this.props.title && <h2>{this.props.title}</h2>}
        <FeedbackOptions
          arrayFrmState={this.arrayState}
          onClick={this.onBtnClick}
        />

        {total !== 0 ? (
          <Fragment>
            <ul>
              {arrFrmState.map(item => (
                <Fragment key={item}>
                  <li className={styles.statsItem}>
                    <span className={styles.statsKind}>{item}: </span>
                    <span className={styles.statsValue}>
                      {this.state[item]}
                    </span>
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
