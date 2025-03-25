import { useEffect, useRef } from "react";
import styles from "./Boxx.module.css"
import {Player} from "@lordicon/react"
import ScrollReveal from "scrollreveal";
const Boxxx=(props)=>{

    const playerRef1=useRef(null);
    useEffect(()=>{
        playerRef1?.current?.playFromBeginning();
    },[])
    const handleComplete = () => {
      setTimeout(() => {
        playerRef1?.current?.playFromBeginning();
      }, 2500); // play again after 2.5 seconds
    };
  
useEffect(()=>{
  ScrollReveal().reveal(`.${styles.icon}`, {
    duration: 1000,
    distance: "30px",
    origin: "top",
    easing: "ease-out",
    reset: false,
    viewFactor: 0.2,
    interval: 300,
    delay: 200,
    scale: 1,
  });
  ScrollReveal().reveal(`.${styles.description}`, {
    duration: 1000,
    distance: "30px",
    origin: "bottom",
    easing: "ease-out",
    reset: false,
    viewFactor: 0.2,
    interval: 300,
    delay: 200,
    scale: 1,
  });
},[])

return <>
<div className={styles.box}>
<div className={styles.icon}><Player icon={props.icon} ref={playerRef1} size="95%" loop={true} onComplete={handleComplete}></Player></div>
      <div className={styles.description}>{props.description}</div>
</div>
</>


}
export default Boxxx
