import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import styles from "./CountUp.module.css";

const CountingUp = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.row}>
 

      <div className={styles.font}>
        {inView && <CountUp end={2973} duration={6.5} />}
        <div className={styles.explain}>אמהות של חתן/כלה</div>
      </div>
      <div className={styles.font}>
        {inView && <CountUp end={1854} duration={5} />}
        <div className={styles.explain}>כלות בת מצווה</div>
      </div>
      <div className={styles.font}>
        {inView && <CountUp end={176} duration={4} />}
        <div className={styles.explain}>כלות</div>
      </div>
    </div>
  );
};

export default CountingUp;