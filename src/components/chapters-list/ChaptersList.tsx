import { useState, useEffect, useRef } from 'react';
import styles from './ChaptersList.module.css';
import ChapterItem from './chapter-item/ChapterItem';

const chapters = [
  'бросающий камни или камни саваоф',
  'как я ем собаку',
  'мое богатсво - люди',
  'герои быта',
  'разные на всегда',
  'на новенького',
  'проделки путешественника',
  'масловка',
  'не про то',
];

const ChaptersList = () => {
  const [isAnimate, setIsAnimate] = useState(true);
  const [startOffset, setStartOffset] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isAnimate) {
      interval = setInterval(() => {
        if (startOffset >= 100) setStartOffset(0);
        setStartOffset((prev) => prev + 0.1);
      }, 40);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isAnimate, startOffset]);

  const handleMouseEnter = () => {
    setIsAnimate(false);
  };

  const handleMouseLeave = () => {
    setIsAnimate(true);
  };

  return (
    <svg
      className={styles.chapters}
      width="374.62704mm"
      height="196.44402mm"
      viewBox="0 0 374.62706 196.44401"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        transform="translate(72.969823,-50.277988)"
        id="tophalf"
        d="M 266.79664,147.2415 A 154.34746,62.847385 0 0 1 112.44918,210.08889 154.34746,62.847385 0 0 1 -41.898277,147.2415 154.34746,62.847385 0 0 1 112.44918,84.394115 154.34746,62.847385 0 0 1 266.79664,147.2415 Z"
      />
      <text className={styles.chapters__text}>
        <textPath className={styles.chapters__word} fill="white" xlinkHref="#tophalf" startOffset={`${startOffset}%`}>
          {/* <animate attributeName='startOffset' from='0' to='100%' begin='0s' dur='30s' repeatCount='indefinite'/> */}
          {chapters.map((chapter) => (
            <ChapterItem handleMouseEnter={() => handleMouseEnter()} handleMouseLeave={() => handleMouseLeave()} chapter={chapter} key={chapter} />
          ))}
        </textPath>
        <textPath className={styles.chapters__word} fill="white" xlinkHref="#tophalf" startOffset={`${startOffset - 100}%`}>
          {/* <animate attributeName='startOffset' from='0' to='100%' begin='0s' dur='30s' repeatCount='indefinite'/> */}
          {chapters.map((chapter) => (
            <ChapterItem handleMouseEnter={() => handleMouseEnter()} handleMouseLeave={() => handleMouseLeave()} chapter={chapter} key={chapter} />
          ))}
        </textPath>
      </text>
    </svg>
  );
};

export default ChaptersList;
