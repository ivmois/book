import { useState, useEffect } from "react";
import styles from "./Chapters.module.css";

const Chapters = () => {
  // const [isAnimate, setIsAnimate] = useState(true);
  const [animateStap, setAnimateStap] = useState(0);

  // useEffect(() => {
  //   if (isAnimate) {
  //     setInterval(() => {
  //       setAnimateStap((prev) => prev + 0.001);
  //     }, 1);
  //   }
  // }, [isAnimate]);

  // console.log(animateStap);

  return (
    <svg className={styles.chapters} viewBox="0 0 70 70" width="40%">
      <path d="M35,35m-23,0a23,12 0 1,1 46,0a23,12 0 1,1 -46,0" id="tophalf" />

      <text>
        <textPath
          className={styles.chapters__item}
          fill="white"
          xlinkHref="#tophalf"
          startOffset={`${0 + animateStap}%`}
        >
          БРОСАЮЩИЙ КАМНИ ИЛИ КАМНИ САВАОФ
        </textPath>
        <textPath
          className={styles.chapters__item}
          fill="white"
          xlinkHref="#tophalf"
          startOffset={`${24 + animateStap}%`}
        >
          КАК Я ЕМ СОБАКУ
        </textPath>
        <textPath
          className={styles.chapters__item}
          fill="white"
          xlinkHref="#tophalf"
          startOffset={`${34 + animateStap}%`}
        >
          МОЕ БОГАТСТВО - ЛЮДИ
        </textPath>
        <textPath
          className={styles.chapters__item}
          fill="white"
          xlinkHref="#tophalf"
          startOffset={`${48 + animateStap}%`}
        >
          ГЕРОИ БЫТА
        </textPath>
        <textPath
          className={styles.chapters__item}
          fill="white"
          xlinkHref="#tophalf"
          startOffset={`${56 + animateStap}%`}
        >
          РАЗНЫЕ НАВСЕГДА
        </textPath>
        <textPath
          className={styles.chapters__item}
          fill="white"
          xlinkHref="#tophalf"
          startOffset={`${67 + animateStap}%`}
        >
          НА НОВЕНЬКОГО
        </textPath>
        <textPath
          className={styles.chapters__item}
          fill="white"
          xlinkHref="#tophalf"
          startOffset={`${76 + animateStap}%`}
        >
          ПРОДЕЛКИ ПУТЕШЕСТВЕННИКА
        </textPath>
        <textPath
          className={styles.chapters__item}
          fill="white"
          xlinkHref="#tophalf"
          startOffset={`${93 + animateStap}%`}
        >
          МАСЛОВКА
        </textPath>

        {/* <textPath
          className={styles.chapters__text}
          fill="white"
          xlinkHref="#tophalf"
          startOffset={`${0 + animateStap}%`}
        >
          <a className={styles.chapters__item}>
            БРОСАЮЩИЙ КАМНИ ИЛИ КАМНИ САВАОФ
          </a>
          <a className={styles.chapters__item}> КАК Я ЕМ СОБАКУ </a>
          <a className={styles.chapters__item}>МОЕ БОГАТСТВО - ЛЮДИ</a>
          <a className={styles.chapters__item}> ГЕРОИ БЫТА </a>
          <a className={styles.chapters__item}>РАЗНЫЕ НАВСЕГДА</a>
          <a className={styles.chapters__item}> НА НОВЕНЬКОГО </a>
          <a className={styles.chapters__item}>ПРОДЕЛКИ ПУТЕШЕСТВЕННИКА</a>
          <a className={styles.chapters__item}> МАСЛОВКА </a>
        </textPath> */}
      </text>
    </svg>
  );
};

export default Chapters;
