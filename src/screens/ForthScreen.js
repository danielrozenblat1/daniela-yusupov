
import styles from "./ForthScreen.module.css"
import Boxxx from "../components/Boxxx/Box"
import Button from "../components/button/Button"
import ten from "../Icons/wired-lineal-2426-number-10-hover-pinch (1).json"
import trying from "../Icons/wired-lineal-1599-powder-makeup-face-hover-pinch (1).json"
import support from "../Icons/wired-lineal-1025-request-support-service-hover-slide (1).json"
import CountingUp from "../components/count/CountUp"
const ForthScreen=()=>{


    return <>
<div className={styles.title}> אז מה גרם ל</div>
    <CountingUp/>
    <div className={styles.title}>לבחור דווקא בי</div>
    <div className={styles.row}>
    <Boxxx icon={ten} description="מעל לעשר שנות נסיון בתחום"/>
    <Boxxx icon={trying} description="איפור ושיער נסיון לפני החתונה (לכלות כמובן)"/>
    <Boxxx icon={support} description="זמינות לכל שאלה, חשש או התלבטות לאורך כל התהליך"/>
    </div>

    <div className={styles.description}>אז אם את רוצה להראות ולהרגיש מושלמת באירוע שלך</div>
    <Button text="תלחצי כאן ונדבר!"/>
    </>
}
export default ForthScreen