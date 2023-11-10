import Posts from '../components/Posts/Posts';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.naw}>
        <h1>API Posts</h1>
      </div>
      <div className={styles.container}>
        <Posts />
      </div>
    </div>
  );
};

export default App;
