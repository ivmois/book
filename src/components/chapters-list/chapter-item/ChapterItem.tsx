import styles from './ChapterItem.module.css';

interface ChapterItem {
  chapter: string;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const ChapterItem = ({ chapter, handleMouseEnter, handleMouseLeave }: ChapterItem) => {
  return (
    <>
      <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.chapters__item}>
        {chapter}
      </a>
      <tspan className={styles.chapters__dot}> ● </tspan>
    </>
  );
};

export default ChapterItem;
