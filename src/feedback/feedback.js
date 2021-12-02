import { Component } from 'react';
import styles from './feedback.module.css';

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      key: 1,
      Good: 0,
      Neutral: 0,
      Bad: 0,
    };
  }

  get value() {
    return this.value;
  }
  set value(newValue) {
    this.value = {
      value: newValue,
    };
  }

  onGoodBtnClick = () => {
    this.setState({ Good: this.state.Good + 1 });
  };
  // onGoodBtnClick = () => { //prevState - учитывает предыдущее значение аргумента. Учитывает асинхронность метода setState
  //   this.setState(prevState => {
  //     return ({ value: prevState.value + 1 });
  //   })
  //   console.log('value: ', this.state.value)
  // }

  onNeutralBtnClick = () => {
    this.setState({ Neutral: this.state.Neutral + 1 });
  };
  onBadBtnClick = () => {
    this.setState({ Bad: this.state.Bad + 1 });
  };

  render() {
    return (
      <>
        <div>
          <h2>{this.props.title}</h2>
          <button onClick={this.onGoodBtnClick}>Good</button>
          <button onClick={this.onNeutralBtnClick}>Neutral</button>
          <button onClick={this.onBadBtnClick}>Bad</button>
        </div>
        <ul className={styles.statsList} key={this.state.Gkey}>
          <li className={styles.statsItem}>
            <span className={styles.statskind}>Good: </span>
            <span className={styles.statsvalue}>{this.state.Good}</span>
          </li>
        </ul>
        <ul className={styles.statsList} key={this.state.Nkey}>
          <li className={styles.statsItem}>
            <span className={styles.statskind}>Neutral: </span>
            <span className={styles.statsvalue}>{this.state.Neutral}</span>
          </li>
        </ul>
        <ul className={styles.statsList} key={this.state.Bkey}>
          <li className={styles.statsItem}>
            <span className={styles.statskind}>Bad: </span>
            <span className={styles.statsvalue}>{this.state.Bad}</span>
          </li>
        </ul>
      </>
    );
  }
}

console.dir(Feedback);

// function Statistics(props) {
//   const { id, kind, value } = props;
//   return (
//     <ul className={styles.statList} key={id}>
//       <li className={styles.statItem}>
//         <span className={styles.statKind}>{kind}</span>
//         <span className={styles.statValue}>{value}</span>
//       </li>
//     </ul>
//   );
// }

export default Feedback;
