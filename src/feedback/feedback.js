import styles from './feedback.module.css';

const Feedback = () => {
  return (
    <div>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
    </div>
  );
};

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
