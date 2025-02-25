import IconTextComponentNew from "../components/can/NewCan"
import Works from "../components/recommends/Works"
import styles from "./SecondScreen.module.css"
import wedding from "../Icons/wired-outline-653-marriage-hover-pinch (3).json"
import makeup from "../Icons/wired-outline-1599-powder-makeup-face-hover-pinch (10).json"
import hair from "../Icons/wired-outline-1562-haircut-hover-pinch.json"
import Experienced from "../components/can/Can"
import Button from "../components/button/Button"
const SecondScreen=()=>{


    return <>
<div className={styles.title}>רק לפני הכל...</div>
<Works/>
<div className={styles.title}>אני יודעת כמה חשוב לך</div>
<div className={styles.row}>
<IconTextComponentNew text="שהשיער והאיפור יתאימו לסוג העור והפנים שלך" icon={hair}/>
<IconTextComponentNew text="שהשיער והאיפור יחזיקו מעמד בלי טאצ׳אפים לאורך כל האירוע" icon={makeup}/>
<IconTextComponentNew text="שתהיה מישהי בצד השני שבאמת תקשיב לך ולרצונות שלך" icon={wedding}/>
</div>
<div className={styles.description} style={{textDecoration:"underline"}}>ובשורה התחתונה, להגיע לאירוע שלך כשאת מרגישה בשיא!</div>
<div className={styles.title}>לכן,אני שמה דגש שכל מי שעוברת אצלי</div>
<div className={styles.row}>
<Experienced text="תרגיש חופשי לבטא את עצמה והרצונות שלה לפני האירוע" number="01"/>
<Experienced text="תקבל התאמה מדוייקת של השיער והאיפור" number="02"/>
<Experienced text="תצא עם ביטחון מלא במראה שלה לאירוע" number="03"/>
</div>
<div className={styles.description}>שנייה לפני שאסביר לך איך הקסם קורה</div>

    </>
}
export default SecondScreen