import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './Can.module.css';

const Experience = ({ text, number }) => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.container}`, {
      duration: 1000,
      distance: "30px",
      origin: "right",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);

  const formattedNumber = String(number).padStart(2, '0');

  return (
    <div className={styles.container}>
      <div className={styles.number}>{formattedNumber}</div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Experience;