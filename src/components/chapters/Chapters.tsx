import { useState, useEffect } from 'react';
import styles from './Chapters.module.css';

const Chapters = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const [animateStep, setAnimateStep] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isAnimate) {
      interval = setInterval(() => {
        setAnimateStep((prev) => prev + 0.5);
      }, 40);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isAnimate]);

  console.log(animateStep);

  return (
    <svg
      className={styles.chapters}
      width="374.62704mm"
      height="196.44402mm"
      viewBox="0 0 374.62706 196.44401"
      version="1.1"
      id="svg5"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        transform="translate(72.969823,-50.277988)"
        id="tophalf"
        d="M 266.79664,147.2415 A 154.34746,62.847385 0 0 1 112.44918,210.08889 154.34746,62.847385 0 0 1 -41.898277,147.2415 154.34746,62.847385 0 0 1 112.44918,84.394115 154.34746,62.847385 0 0 1 266.79664,147.2415 Z"
      />
      <text className={styles.chapters__text}>
        <textPath className={styles.chapters__word} fill="white" xlinkHref="#tophalf" startOffset={`${0 + animateStep}%`}>
          <animate attributeName='startOffset' from='0' to='100%' begin='0s' dur='30s' repeatCount='indefinite'/>
          <a className={styles.chapters__item}>БРОСАЮЩИЙ КАМНИ ИЛИ КАМНИ САВАОФ</a>
          <tspan className={styles.chapters__dot}> ● </tspan>
          <a className={styles.chapters__item}>КАК Я ЕМ СОБАКУ</a>
          <tspan className={styles.chapters__dot}> ● </tspan>
          <a className={styles.chapters__item}>МОЕ БОГАТСТВО - ЛЮДИ</a>
          <tspan className={styles.chapters__dot}> ● </tspan>
          <a className={styles.chapters__item}>ГЕРОИ БЫТА</a>
          <tspan className={styles.chapters__dot}> ● </tspan>
          <a className={styles.chapters__item}>РАЗНЫЕ НАВСЕГДА</a>
          <tspan className={styles.chapters__dot}> ● </tspan>
          <a className={styles.chapters__item}>НА НОВЕНЬКОГО</a>
          <tspan className={styles.chapters__dot}> ● </tspan>
          <a className={styles.chapters__item}>ПРОДЕЛКИ ПУТЕШЕСТВЕННИКА</a>
          <tspan className={styles.chapters__dot}> ● </tspan>
          <a className={styles.chapters__item}>МАСЛОВКА</a>
          <tspan className={styles.chapters__dot}> ● </tspan>
          <a className={styles.chapters__item}>НЕ ПРО ТО</a>
          <tspan className={styles.chapters__dot}> ● </tspan>
        </textPath>
      </text>
    </svg>
  );
};

export default Chapters;
