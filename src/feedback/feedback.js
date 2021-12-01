import styles from './feedback.module.css';

const Feedback = () => {
  return (
    <div>
      <button onClick={onBtnClick}>Good</button>
      <button onClick={onBtnClick}>Neutral</button>
      <button onClick={onBtnClick}>Bad</button>
    </div>
  );
};

function onBtnClick(e) {
  alert('Hi');
}

function Statistics(props) {
  const { id, kind, value } = props;
  return (
    <ul className={styles.statList} key={id}>
      <li className={styles.statItem}>
        <span className={styles.statKind}>{kind}</span>
        <span className={styles.statValue}>{value}</span>
      </li>
    </ul>
  );
}

export default Feedback;
