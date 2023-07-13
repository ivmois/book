// ]
import Background from '../../ lottie/Background';
import ChaptersList from '../../components/chapters-list/ChaptersList';
import Menu from '../../components/menu/Menu';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <Background />
      <img className={styles.titleImg} src="/pinatri.png" alt="pinatri" />
      <Menu />
      <ChaptersList />
      <div className={styles.currentImgs}>
        <img className={styles.currentImgSmall} src="/rings-left.png" alt="rings" />
        <img className={styles.currentImgBig} src="/p3.png" alt="pinatri" />
        <img className={styles.currentImgSmall} src="/rings-right.png" alt="rings" />
      </div>

      <span className={styles.data}> 2019</span>
    </main>
  );
};

export default Home;
